import { PlannerSectionPanel } from '@/components/planner/PlannerSectionPanel'

interface PlannerCheatSheetPanelProps {
  onToggle: (open: boolean) => void
  open: boolean
}

export function PlannerCheatSheetPanel({
  onToggle,
  open
}: PlannerCheatSheetPanelProps) {
  return (
    <PlannerSectionPanel
      bodyClassName="planner-cheatsheet__content"
      className="planner-cheatsheet"
      onToggle={onToggle}
      open={open}
      title="Control cheat sheet"
    >
      <div>
        <strong>Mouse</strong>
        <p>
          Drag empty space to orbit. Hold <code>Shift</code> and click the ground to place the active item.
          Drag a selected piece to move it. Drag the ring to rotate it.
        </p>
      </div>
      <div>
        <strong>Keyboard</strong>
        <p>
          <code>Cmd/Ctrl + Z</code> undo. <code>Cmd/Ctrl + Shift + Z</code> or <code>Cmd/Ctrl + Y</code> redo.{' '}
          <code>Cmd/Ctrl + C</code> copy. <code>Cmd/Ctrl + V</code> paste. <code>Cmd/Ctrl + D</code>{' '}
          duplicate.
        </p>
        <p>
          <code>WASD</code> or arrows move. <code>Q</code>/<code>E</code> rotate. <code>L</code> lock or
          unlock. <code>Delete</code> removes. <code>Esc</code> clears selection.
        </p>
      </div>
    </PlannerSectionPanel>
  )
}
