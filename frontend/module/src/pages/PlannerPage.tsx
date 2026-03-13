import type { PlannerItem, PlannerScene } from '@atelierfrancois/lilwud-sdk'
import {
  createEmptyPlannerScene,
  type PlannerMoodLighting,
  type PlannerSurfaceTheme
} from '@atelierfrancois/lilwud-sdk'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { PlannerCanvasActions } from '@/components/planner/PlannerCanvasActions'
import { PlannerCanvas } from '@/components/planner/PlannerCanvas'
import { PlannerCheatSheetPanel } from '@/components/planner/PlannerCheatSheetPanel'
import { PlannerPalettePanel } from '@/components/planner/PlannerPalettePanel'
import { PlannerProjectSettingsPanel } from '@/components/planner/PlannerProjectSettingsPanel'
import { PlannerSceneBasketPanel } from '@/components/planner/PlannerSceneBasketPanel'
import { PlannerSelectedPiecePanel } from '@/components/planner/PlannerSelectedPiecePanel'
import { clampItemPosition } from '@/components/planner/plannerAssets'
import {
  buildBasketInputsFromScene,
  cloneItem,
  cloneScene,
  createDraftName,
  createDuplicatedItem,
  normalizeRotation,
  pickSelectedItemId
} from '@/components/planner/plannerUtils'
import { fallbackProducts } from '@/data/catalog'
import { plannerPaletteByAssetKey, type PlannerPaletteTab } from '@/data/plannerPalette'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { usePlannerProjects } from '@/hooks/usePlannerProjects'
import { routePaths } from '@/router'

const HISTORY_LIMIT = 60

export function PlannerPage() {
  const { status } = useAuth()
  const { addItem, addItems } = useCart()
  const { getProject, saveProject } = usePlannerProjects()
  const location = useLocation()
  const navigate = useNavigate()
  const params = new URLSearchParams(location.search)
  const queryAssetKey = params.get('asset')
  const queryProjectId = params.get('projectId')
  const clipboardRef = useRef<PlannerItem | null>(null)

  const [scene, setScene] = useState<PlannerScene>(() => createEmptyPlannerScene())
  const [projectId, setProjectId] = useState<number | null>(
    queryProjectId ? Number(queryProjectId) : null
  )
  const [projectName, setProjectName] = useState(createDraftName)
  const [summary, setSummary] = useState('A calm starting point for outdoor play.')
  const [activeAssetKey, setActiveAssetKey] = useState<string | null>(
    queryAssetKey && plannerPaletteByAssetKey[queryAssetKey] ? queryAssetKey : 'mori-bench'
  )
  const [paletteTab, setPaletteTab] = useState<PlannerPaletteTab>(() =>
    queryAssetKey && plannerPaletteByAssetKey[queryAssetKey]
      ? plannerPaletteByAssetKey[queryAssetKey].tab
      : 'furniture'
  )
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)
  const [saveMessage, setSaveMessage] = useState<string | null>(null)
  const [history, setHistory] = useState<PlannerScene[]>([])
  const [future, setFuture] = useState<PlannerScene[]>([])
  const [palettePanelOpen, setPalettePanelOpen] = useState(true)
  const [scenePanelOpen, setScenePanelOpen] = useState(true)
  const [selectedPanelOpen, setSelectedPanelOpen] = useState(false)
  const [projectPanelOpen, setProjectPanelOpen] = useState(false)
  const [cheatsheetOpen, setCheatsheetOpen] = useState(false)

  const selectedItem = scene.items.find((item) => item.id === selectedItemId) ?? null
  const productsById = new Map(fallbackProducts.map((product) => [product.id, product]))
  const activePaletteItem = activeAssetKey
    ? (plannerPaletteByAssetKey[activeAssetKey] ?? null)
    : null
  const saleSceneInputs = buildBasketInputsFromScene(scene.items)
  const sceneEntries = scene.items.map((item) => {
    const paletteItem = plannerPaletteByAssetKey[item.assetKey]
    const product = item.productId != null ? (productsById.get(item.productId) ?? null) : null

    return {
      item,
      label: paletteItem?.name ?? item.name,
      price: product?.price ?? null,
      tab: paletteItem?.tab ?? 'furniture'
    }
  })
  const sceneTotal = sceneEntries.reduce((sum, entry) => sum + (entry.price ?? 0), 0)

  useEffect(() => {
    if (queryAssetKey && plannerPaletteByAssetKey[queryAssetKey]) {
      setActiveAssetKey(queryAssetKey)
      setPaletteTab(plannerPaletteByAssetKey[queryAssetKey].tab)
    }
  }, [queryAssetKey])

  useEffect(() => {
    if (selectedItem) {
      setSelectedPanelOpen(true)
    }
  }, [selectedItem?.id])

  useEffect(() => {
    if (!queryProjectId || status !== 'authenticated') {
      return
    }

    let ignore = false

    async function loadProject() {
      try {
        const project = await getProject(Number(queryProjectId))
        if (!ignore) {
          setProjectId(project.id)
          setProjectName(project.name)
          setSummary(project.summary)
          setScene(project.scene)
          setSelectedItemId(project.scene.items[0]?.id ?? null)
          setHistory([])
          setFuture([])
        }
      } catch {
        if (!ignore) {
          setSaveMessage('The saved garden could not be loaded.')
        }
      }
    }

    void loadProject()

    return () => {
      ignore = true
    }
  }, [queryProjectId, status])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return
      }

      const commandKey = event.metaKey || event.ctrlKey
      const lowerKey = event.key.toLowerCase()

      if (commandKey && lowerKey === 'z') {
        event.preventDefault()
        if (event.shiftKey) {
          redo()
        } else {
          undo()
        }
        return
      }

      if (commandKey && lowerKey === 'y') {
        event.preventDefault()
        redo()
        return
      }

      if (commandKey && lowerKey === 'c') {
        event.preventDefault()
        copySelected()
        return
      }

      if (commandKey && lowerKey === 'v') {
        event.preventDefault()
        pasteClipboard()
        return
      }

      if (commandKey && lowerKey === 'd') {
        event.preventDefault()
        duplicateSelected()
        return
      }

      if (lowerKey === 'l' && selectedItem) {
        event.preventDefault()
        toggleItemLock(selectedItem.id)
        return
      }

      if (!selectedItem) {
        if (event.key === 'Escape') {
          setSelectedItemId(null)
        }
        return
      }

      const step = event.shiftKey ? 0.5 : 0.25

      switch (event.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          event.preventDefault()
          moveSelected(0, -step)
          break
        case 'ArrowDown':
        case 's':
        case 'S':
          event.preventDefault()
          moveSelected(0, step)
          break
        case 'ArrowLeft':
        case 'a':
        case 'A':
          event.preventDefault()
          moveSelected(-step, 0)
          break
        case 'ArrowRight':
        case 'd':
        case 'D':
          event.preventDefault()
          moveSelected(step, 0)
          break
        case 'q':
        case 'Q':
          event.preventDefault()
          rotateSelected(-Math.PI / 12)
          break
        case 'e':
        case 'E':
          event.preventDefault()
          rotateSelected(Math.PI / 12)
          break
        case 'Backspace':
        case 'Delete':
          event.preventDefault()
          removeSelectedItem()
          break
        case 'Escape':
          event.preventDefault()
          setSelectedItemId(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [history, future, scene, selectedItem])

  function applyScene(
    nextScene: PlannerScene,
    options: {
      nextSelectedId?: string | null
      recordHistory?: boolean
    } = {}
  ) {
    if (options.recordHistory ?? true) {
      rememberScene(scene)
    }

    setScene(nextScene)
    setSaveMessage(null)

    if (options.nextSelectedId !== undefined) {
      setSelectedItemId(options.nextSelectedId)
    }
  }

  function rememberScene(snapshot: PlannerScene) {
    setHistory((current) => [...current.slice(-(HISTORY_LIMIT - 1)), cloneScene(snapshot)])
    setFuture([])
  }

  function beginItemInteraction() {
    rememberScene(scene)
  }

  function handleAddPlannerAsset(position: [number, number, number]) {
    if (!activePaletteItem) {
      return
    }

    const item: PlannerItem = {
      id: crypto.randomUUID(),
      productId: activePaletteItem.productId,
      assetKey: activePaletteItem.assetKey,
      name: activePaletteItem.name,
      position,
      rotationY: 0,
      scale: 1,
      locked: false
    }

    applyScene(
      {
        ...scene,
        items: [...scene.items, item]
      },
      { nextSelectedId: item.id }
    )
  }

  function patchItem(
    itemId: string,
    patch: Partial<PlannerItem>,
    options: {
      recordHistory?: boolean
    } = {}
  ) {
    const currentItem = scene.items.find((item) => item.id === itemId)
    if (!currentItem) {
      return
    }

    applyScene(
      {
        ...scene,
        items: scene.items.map((item) => (item.id === itemId ? { ...item, ...patch } : item))
      },
      {
        nextSelectedId: itemId,
        recordHistory: options.recordHistory
      }
    )
  }

  function moveSelected(dx: number, dz: number) {
    if (!selectedItem || selectedItem.locked) {
      return
    }

    const nextPosition = clampItemPosition(
      selectedItem,
      scene.width,
      scene.depth,
      selectedItem.position[0] + dx,
      selectedItem.position[2] + dz
    )

    patchItem(selectedItem.id, { position: nextPosition })
  }

  function rotateSelected(delta: number) {
    if (!selectedItem || selectedItem.locked) {
      return
    }

    patchItem(selectedItem.id, {
      rotationY: normalizeRotation(selectedItem.rotationY + delta)
    })
  }

  function toggleItemLock(itemId: string) {
    const item = scene.items.find((entry) => entry.id === itemId)
    if (!item) {
      return
    }

    patchItem(itemId, { locked: !item.locked })
  }

  function removeSelectedItem() {
    if (!selectedItem) {
      return
    }

    applyScene(
      {
        ...scene,
        items: scene.items.filter((item) => item.id !== selectedItem.id)
      },
      { nextSelectedId: null }
    )
  }

  function copySelected() {
    if (!selectedItem) {
      return
    }

    clipboardRef.current = cloneItem(selectedItem)
    setSaveMessage(`${selectedItem.name} copied.`)
  }

  function duplicateSelected() {
    if (!selectedItem) {
      return
    }

    const duplicate = createDuplicatedItem(selectedItem, scene.width, scene.depth)
    applyScene(
      {
        ...scene,
        items: [...scene.items, duplicate]
      },
      { nextSelectedId: duplicate.id }
    )
  }

  function pasteClipboard() {
    if (!clipboardRef.current) {
      return
    }

    const pasted = createDuplicatedItem(clipboardRef.current, scene.width, scene.depth)
    applyScene(
      {
        ...scene,
        items: [...scene.items, pasted]
      },
      { nextSelectedId: pasted.id }
    )
  }

  function undo() {
    const previousScene = history[history.length - 1]
    if (!previousScene) {
      return
    }

    setHistory((current) => current.slice(0, -1))
    setFuture((current) => [cloneScene(scene), ...current].slice(0, HISTORY_LIMIT))
    setScene(cloneScene(previousScene))
    setSelectedItemId(pickSelectedItemId(previousScene, selectedItemId))
    setSaveMessage(null)
  }

  function redo() {
    const nextScene = future[0]
    if (!nextScene) {
      return
    }

    setFuture((current) => current.slice(1))
    setHistory((current) => [...current.slice(-(HISTORY_LIMIT - 1)), cloneScene(scene)])
    setScene(cloneScene(nextScene))
    setSelectedItemId(pickSelectedItemId(nextScene, selectedItemId))
    setSaveMessage(null)
  }

  async function handleSave() {
    if (status !== 'authenticated') {
      setSaveMessage('Create an account first to save your planner work.')
      navigate(routePaths.account, {
        state: {
          backgroundLocation: location,
          redirectTo: `${location.pathname}${location.search}`
        }
      })
      return
    }

    const payload = {
      name: projectName,
      summary,
      scene
    }

    try {
      const response = await saveProject(payload, projectId)

      setProjectId(response.id)
      setSaveMessage('Garden saved.')
      navigate(`/planner?projectId=${response.id}`, { replace: true })
    } catch {
      setSaveMessage('Saving failed. Check the API and try again.')
    }
  }

  function startFresh() {
    setProjectId(null)
    setProjectName(createDraftName())
    setSummary('A calm starting point for outdoor play.')
    setScene(createEmptyPlannerScene())
    setSelectedItemId(null)
    setSaveMessage(null)
    setHistory([])
    setFuture([])
    navigate('/planner', { replace: true })
  }

  function addSceneToBasket() {
    if (!saleSceneInputs.length) {
      return
    }

    addItems(saleSceneInputs)
  }

  function addSceneLineToBasket(productId: number | null) {
    if (productId == null) {
      return
    }

    addItems([{ productId, quantity: 1 }])
  }

  return (
    <div className="planner-page">
      <section className="planner-page__scene">
        <div className="planner-canvas-panel">
          <PlannerCanvas
            activeAssetKey={activeAssetKey}
            onAddItem={handleAddPlannerAsset}
            onBeginItemInteraction={beginItemInteraction}
            onSelectItem={setSelectedItemId}
            onUpdateItem={patchItem}
            scene={scene}
            selectedItemId={selectedItemId}
          />
        </div>
      </section>

      <section className="planner-page__actions">
        <PlannerCanvasActions
          futureLength={future.length}
          historyLength={history.length}
          onNewGarden={startFresh}
          onRedo={redo}
          onSave={handleSave}
          onUndo={undo}
          projectId={projectId}
          projectName={projectName}
          saveMessage={saveMessage}
        />
      </section>

      <section className="planner-sidebar planner-page__dock">
        <div className="planner-sidebar__stack">
          <div className="planner-sidebar__primary">
            <PlannerProjectSettingsPanel
              depth={scene.depth}
              onDepthChange={(depth) =>
                applyScene(
                  {
                    ...scene,
                    depth
                  },
                  { recordHistory: false }
                )
              }
              onMoodLightingChange={(moodLighting) =>
                applyScene(
                  {
                    ...scene,
                    moodLighting
                  },
                  { recordHistory: false }
                )
              }
              onProjectNameChange={setProjectName}
              onSummaryChange={setSummary}
              onThemeChange={(surfaceTheme) =>
                applyScene(
                  {
                    ...scene,
                    surfaceTheme
                  },
                  { recordHistory: false }
                )
              }
              onToggle={setProjectPanelOpen}
              onWidthChange={(width) =>
                applyScene(
                  {
                    ...scene,
                    width
                  },
                  { recordHistory: false }
                )
              }
              moodLighting={scene.moodLighting as PlannerMoodLighting}
              open={projectPanelOpen}
              projectName={projectName}
              summary={summary}
              surfaceTheme={scene.surfaceTheme as PlannerSurfaceTheme}
              width={scene.width}
            />

            <PlannerPalettePanel
              activeAssetKey={activeAssetKey}
              onAssetSelect={setActiveAssetKey}
              onPaletteTabChange={setPaletteTab}
              onToggle={setPalettePanelOpen}
              open={palettePanelOpen}
              paletteTab={paletteTab}
            />

            <PlannerSelectedPiecePanel
              onAddItemToBasket={addItem}
              onClearSelection={() => setSelectedItemId(null)}
              onCopy={copySelected}
              onDuplicate={duplicateSelected}
              onMove={moveSelected}
              onPaste={pasteClipboard}
              onRotate={rotateSelected}
              onToggle={setSelectedPanelOpen}
              onToggleItemLock={toggleItemLock}
              open={selectedPanelOpen}
              selectedItem={selectedItem}
            />
            
            <PlannerSceneBasketPanel
              canAddSaleItems={Boolean(saleSceneInputs.length)}
              onAddSaleItemsToBasket={addSceneToBasket}
              onAddSceneLineToBasket={addSceneLineToBasket}
              onSelectItem={setSelectedItemId}
              onToggle={setScenePanelOpen}
              onToggleItemLock={toggleItemLock}
              open={scenePanelOpen}
              sceneEntries={sceneEntries}
              sceneTotal={sceneTotal}
              selectedItemId={selectedItemId}
            />

            <PlannerCheatSheetPanel onToggle={setCheatsheetOpen} open={cheatsheetOpen} />
          </div>
        </div>
      </section>
    </div>
  )
}
