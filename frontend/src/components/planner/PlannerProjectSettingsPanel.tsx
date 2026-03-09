import type { PlannerSurfaceTheme } from '@atelierfrancois/lilwud-sdk'

import { plannerThemes } from '@/data/brand'
import { PlannerSectionPanel } from '@/components/planner/PlannerSectionPanel'

interface PlannerProjectSettingsPanelProps {
  depth: number
  onDepthChange: (value: number) => void
  onProjectNameChange: (value: string) => void
  onSummaryChange: (value: string) => void
  onThemeChange: (value: PlannerSurfaceTheme) => void
  onToggle: (open: boolean) => void
  onWidthChange: (value: number) => void
  open: boolean
  projectName: string
  summary: string
  surfaceTheme: PlannerSurfaceTheme
  width: number
}

export function PlannerProjectSettingsPanel({
  depth,
  onDepthChange,
  onProjectNameChange,
  onSummaryChange,
  onThemeChange,
  onToggle,
  onWidthChange,
  open,
  projectName,
  summary,
  surfaceTheme,
  width
}: PlannerProjectSettingsPanelProps) {
  return (
    <PlannerSectionPanel onToggle={onToggle} open={open} title="Project settings">
      <label className="field">
        <span>Project name</span>
        <input onChange={(event) => onProjectNameChange(event.target.value)} value={projectName} />
      </label>
      <label className="field">
        <span>Summary</span>
        <textarea onChange={(event) => onSummaryChange(event.target.value)} rows={3} value={summary} />
      </label>
      <div className="split-fields">
        <label className="field">
          <span>Width</span>
          <input
            max={20}
            min={2}
            onChange={(event) => onWidthChange(Number(event.target.value))}
            step={0.5}
            type="number"
            value={width}
          />
        </label>
        <label className="field">
          <span>Depth</span>
          <input
            max={20}
            min={2}
            onChange={(event) => onDepthChange(Number(event.target.value))}
            step={0.5}
            type="number"
            value={depth}
          />
        </label>
      </div>
      <label className="field">
        <span>Surface theme</span>
        <select
          onChange={(event) => onThemeChange(event.target.value as PlannerSurfaceTheme)}
          value={surfaceTheme}
        >
          {plannerThemes.map((theme) => (
            <option key={theme.value} value={theme.value}>
              {theme.label}
            </option>
          ))}
        </select>
      </label>
    </PlannerSectionPanel>
  )
}
