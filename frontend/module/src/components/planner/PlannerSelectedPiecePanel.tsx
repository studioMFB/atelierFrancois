import type { PlannerItem } from '@atelierfrancois/lilwud-sdk'

import { PlannerSectionPanel } from '@/components/planner/PlannerSectionPanel'
import { ActionIcon } from '@/components/ui/ActionIcon'

interface PlannerSelectedPiecePanelProps {
  onAddItemToBasket: (productId: number) => void
  onClearSelection: () => void
  onCopy: () => void
  onDuplicate: () => void
  onMove: (dx: number, dz: number) => void
  onPaste: () => void
  onRotate: (delta: number) => void
  onToggle: (open: boolean) => void
  onToggleItemLock: (itemId: string) => void
  open: boolean
  selectedItem: PlannerItem | null
}

export function PlannerSelectedPiecePanel({
  onAddItemToBasket,
  onClearSelection,
  onCopy,
  onDuplicate,
  onMove,
  onPaste,
  onRotate,
  onToggle,
  onToggleItemLock,
  open,
  selectedItem
}: PlannerSelectedPiecePanelProps) {
  return (
    <PlannerSectionPanel onToggle={onToggle} open={open} title="Selected piece">
      {selectedItem ? (
        <>
          <div className="planner-utility-card__header">
            <div>
              <h2>{selectedItem.name}</h2>
              <p className="muted-copy">
                {selectedItem.locked
                  ? 'Locked: selectable, but movement and rotation are paused.'
                  : 'Unlocked: drag in the scene or use the controls below.'}
              </p>
            </div>
            <span className="pill">{selectedItem.locked ? 'Locked' : 'Live controls'}</span>
          </div>
          <div className="planner-control-pad">
            <div />
            <button
              className="ghost-button"
              disabled={selectedItem.locked}
              onClick={() => onMove(0, -0.25)}
              type="button"
            >
              <ActionIcon name="up" />
              Up
            </button>
            <div />
            <button
              className="ghost-button"
              disabled={selectedItem.locked}
              onClick={() => onMove(-0.25, 0)}
              type="button"
            >
              <ActionIcon name="left" />
              Left
            </button>
            <button
              className="ghost-button"
              disabled={selectedItem.locked}
              onClick={() => onMove(0, 0.25)}
              type="button"
            >
              <ActionIcon name="down" />
              Down
            </button>
            <button
              className="ghost-button"
              disabled={selectedItem.locked}
              onClick={() => onMove(0.25, 0)}
              type="button"
            >
              <ActionIcon name="right" />
              Right
            </button>
          </div>
          <div className="button-row button-row--compact">
            <button
              className="ghost-button"
              disabled={selectedItem.locked}
              onClick={() => onRotate(-Math.PI / 12)}
              type="button"
            >
              <ActionIcon name="rotate-left" />
              Rotate left
            </button>
            <button
              className="ghost-button"
              disabled={selectedItem.locked}
              onClick={() => onRotate(Math.PI / 12)}
              type="button"
            >
              <ActionIcon name="rotate-right" />
              Rotate right
            </button>
            <button
              className="ghost-button"
              onClick={() => onToggleItemLock(selectedItem.id)}
              type="button"
            >
              <ActionIcon name={selectedItem.locked ? 'unlock' : 'lock'} />
              {selectedItem.locked ? 'Unlock' : 'Lock'}
            </button>
          </div>
          <div className="button-row button-row--compact">
            {selectedItem.productId != null ? (
              <button
                className="ghost-button"
                onClick={() => onAddItemToBasket(selectedItem.productId!)}
                type="button"
              >
                <ActionIcon name="basket" />
                Add to basket
              </button>
            ) : null}
            <button className="ghost-button" onClick={onCopy} type="button">
              <ActionIcon name="copy" />
              Copy
            </button>
            <button className="ghost-button" onClick={onDuplicate} type="button">
              <ActionIcon name="duplicate" />
              Duplicate
            </button>
            <button className="ghost-button" onClick={onPaste} type="button">
              <ActionIcon name="paste" />
              Paste
            </button>
            <button className="link-button" onClick={onClearSelection} type="button">
              Clear selection
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>No piece selected</h2>
          <p className="muted-copy">
            Pick an object in the scene to move it with mouse, trackpad, keys, or the controls in this section.
          </p>
        </>
      )}
    </PlannerSectionPanel>
  )
}
