import { ActionIcon } from '@/components/ui/ActionIcon'
import { useState } from 'react'

interface PlannerCanvasActionsProps {
  futureLength: number
  historyLength: number
  onNewGarden: () => void
  onRedo: () => void
  onSave: () => void | Promise<void>
  onUndo: () => void
  projectId: number | null
  projectName: string
  saveMessage: string | null
}

export function PlannerCanvasActions({
  futureLength,
  historyLength,
  onNewGarden,
  onRedo,
  onSave,
  onUndo,
  projectId,
  projectName,
  saveMessage
}: PlannerCanvasActionsProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`planner-canvas-actions${collapsed ? ' is-collapsed' : ''}`}>
      <button
        aria-expanded={!collapsed}
        className="planner-canvas-actions__toggle"
        onClick={() => setCollapsed((current) => !current)}
        type="button"
      >
        <ActionIcon name={collapsed ? 'up' : 'down'} />
        {collapsed ? 'Show actions' : 'Hide actions'}
      </button>
      <div className="planner-canvas-actions__body">
        <div className="planner-canvas-actions__group">
          <button className="ghost-button" disabled={!historyLength} onClick={onUndo} type="button">
            <ActionIcon name="undo" />
            Undo
          </button>
          <button className="ghost-button" disabled={!futureLength} onClick={onRedo} type="button">
            <ActionIcon name="redo" />
            Redo
          </button>
          <button className="primary-button" onClick={() => void onSave()} type="button">
            <ActionIcon name="save" />
            {projectId ? 'Update garden' : 'Save garden'}
          </button>
          <button className="ghost-button" onClick={onNewGarden} type="button">
            <ActionIcon name="spark" />
            New garden
          </button>
        </div>
        <div className="planner-canvas-actions__meta">
          <span className="pill">{projectName}</span>
          <span className="pill">
            {saveMessage ?? (historyLength ? `${historyLength} undo steps ready` : 'Draft not saved yet')}
          </span>
        </div>
      </div>
    </div>
  )
}
