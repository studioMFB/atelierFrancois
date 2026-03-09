import { PlannerSectionPanel } from '@/components/planner/PlannerSectionPanel'
import { getPaletteBadge, type PlannerSceneEntry } from '@/components/planner/plannerUtils'

interface PlannerSceneBasketPanelProps {
  canAddSaleItems: boolean
  onAddSaleItemsToBasket: () => void
  onAddSceneLineToBasket: (productId: number | null) => void
  onSelectItem: (itemId: string) => void
  onToggle: (open: boolean) => void
  onToggleItemLock: (itemId: string) => void
  open: boolean
  sceneEntries: PlannerSceneEntry[]
  sceneTotal: number
  selectedItemId: string | null
}

export function PlannerSceneBasketPanel({
  canAddSaleItems,
  onAddSaleItemsToBasket,
  onAddSceneLineToBasket,
  onSelectItem,
  onToggle,
  onToggleItemLock,
  open,
  sceneEntries,
  sceneTotal,
  selectedItemId
}: PlannerSceneBasketPanelProps) {
  return (
    <PlannerSectionPanel
      className="planner-panel--scene"
      onToggle={onToggle}
      open={open}
      title="Scene basket"
    >
      <div className="planner-scene-summary">
        <div>
          <p className="eyebrow">Placed items</p>
          <h2>Current garden list</h2>
        </div>
        <strong>£{sceneTotal.toFixed(0)}</strong>
      </div>
      {sceneEntries.length ? (
        <>
          <div className="planner-scene-list planner-scene-list--scroll">
            {sceneEntries.map((entry) => (
              <article
                className={`planner-scene-line ${
                  selectedItemId === entry.item.id ? 'planner-scene-line--active' : ''
                }`}
                key={entry.item.id}
              >
                <div>
                  <strong>{entry.label}</strong>
                  <p>
                    {entry.price != null
                      ? `£${entry.price.toFixed(0)}`
                      : `${getPaletteBadge(entry.tab)} · Not for sale`}
                    {entry.item.locked ? ' · Locked' : ''}
                  </p>
                </div>
                <div className="planner-scene-line__actions">
                  <button className="ghost-button" onClick={() => onSelectItem(entry.item.id)} type="button">
                    Select
                  </button>
                  <button
                    className="ghost-button"
                    disabled={entry.item.productId == null}
                    onClick={() => onAddSceneLineToBasket(entry.item.productId)}
                    type="button"
                  >
                    Add
                  </button>
                  <button
                    className="link-button"
                    onClick={() => onToggleItemLock(entry.item.id)}
                    type="button"
                  >
                    {entry.item.locked ? 'Unlock' : 'Lock'}
                  </button>
                </div>
              </article>
            ))}
          </div>
          <button
            className="primary-button"
            disabled={!canAddSaleItems}
            onClick={onAddSaleItemsToBasket}
            type="button"
          >
            Add sale items to basket
          </button>
        </>
      ) : (
        <p>
          No items placed yet. Hold <code>Shift</code> and click the ground to add the active palette item.
        </p>
      )}
    </PlannerSectionPanel>
  )
}
