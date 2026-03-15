import type { PlannerMoodLighting, PlannerSurfaceTheme } from '@atelierfrancois/lilwud-sdk'

import { plannerThemes } from '@/data/brand'
import { PlannerSectionPanel } from '@/components/planner/PlannerSectionPanel'
import { CustomSelect } from '@/components/ui/CustomSelect'

interface PlannerProjectSettingsPanelProps {
  depth: number
  onDepthChange: (value: number) => void
  onMoodLightingChange: (value: PlannerMoodLighting) => void
  onProjectNameChange: (value: string) => void
  onSummaryChange: (value: string) => void
  onThemeChange: (value: PlannerSurfaceTheme) => void
  onToggle: (open: boolean) => void
  onWidthChange: (value: number) => void
  moodLighting: PlannerMoodLighting
  open: boolean
  projectName: string
  summary: string
  surfaceTheme: PlannerSurfaceTheme
  width: number
}

const moodLightingOptions: Array<{ label: string; value: PlannerMoodLighting }> = [
  { label: 'morning', value: 'morning' },
  { label: 'midday', value: 'midday' },
  { label: 'evening', value: 'evening' },
  { label: 'dawn', value: 'dawn' }
]

export function PlannerProjectSettingsPanel({
  depth,
  onDepthChange,
  onMoodLightingChange,
  onProjectNameChange,
  onSummaryChange,
  onThemeChange,
  onToggle,
  onWidthChange,
  moodLighting,
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
        <CustomSelect
          ariaLabel="Surface theme"
          onChange={onThemeChange}
          options={plannerThemes}
          value={surfaceTheme}
        />
      </label>
      <label className="field">
        <span>Mood lighting</span>
        <CustomSelect
          ariaLabel="Mood lighting"
          onChange={onMoodLightingChange}
          options={moodLightingOptions}
          value={moodLighting}
        />
      </label>
    </PlannerSectionPanel>
  )
}
