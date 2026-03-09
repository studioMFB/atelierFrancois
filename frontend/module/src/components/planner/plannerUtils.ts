import type { CartItemInput, PlannerItem, PlannerScene } from '@atelierfrancois/lilwud-sdk'

import { clampItemPosition } from '@/components/planner/plannerAssets'
import type { PlannerPaletteTab } from '@/data/plannerPalette'

export interface PlannerSceneEntry {
  item: PlannerItem
  label: string
  price: number | null
  tab: PlannerPaletteTab
}

export function createDraftName() {
  return `Garden sketch ${new Date().toLocaleDateString('en-GB')}`
}

export function getPaletteBadge(tab: PlannerPaletteTab) {
  switch (tab) {
    case 'furniture':
      return 'Furniture'
    case 'mascots':
      return 'Mascot'
    default:
      return 'Decor'
  }
}

export function cloneItem(item: PlannerItem): PlannerItem {
  return {
    ...item,
    position: [...item.position] as [number, number, number]
  }
}

export function cloneScene(scene: PlannerScene): PlannerScene {
  return {
    ...scene,
    items: scene.items.map((item) => cloneItem(item))
  }
}

export function createDuplicatedItem(
  item: PlannerItem,
  sceneWidth: number,
  sceneDepth: number
) {
  const duplicate = cloneItem(item)
  duplicate.id = crypto.randomUUID()
  duplicate.position = clampItemPosition(
    item,
    sceneWidth,
    sceneDepth,
    item.position[0] + 0.5,
    item.position[2] + 0.5
  )
  return duplicate
}

export function pickSelectedItemId(scene: PlannerScene, preferredId: string | null) {
  if (preferredId && scene.items.some((item) => item.id === preferredId)) {
    return preferredId
  }

  return scene.items[0]?.id ?? null
}

export function normalizeRotation(value: number) {
  const fullTurn = Math.PI * 2
  const normalized = value % fullTurn
  return normalized < 0 ? normalized + fullTurn : normalized
}

export function buildBasketInputsFromScene(items: PlannerItem[]): CartItemInput[] {
  const aggregated = new Map<number, number>()

  for (const item of items) {
    if (item.productId == null) {
      continue
    }

    aggregated.set(item.productId, (aggregated.get(item.productId) ?? 0) + 1)
  }

  return Array.from(aggregated.entries()).map(([productId, quantity]) => ({
    productId,
    quantity
  }))
}
