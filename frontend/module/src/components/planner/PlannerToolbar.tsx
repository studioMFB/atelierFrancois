import { WudlingScatter } from "@/components/brand/WudlingScatter";

interface PlannerToolbarProps {
  loadingProject: boolean
}

export function PlannerToolbar({ loadingProject }: PlannerToolbarProps) {
  return (
    <div className="planner-toolbar">
      <div className="planner-toolbar__copy">
        <p className="eyebrow">3D Planner</p>
        <h1>{loadingProject ? 'Loading saved garden...' : 'Shape the garden before you buy.'}</h1>
        <p>
          Hold <code>Shift</code> and click the ground to place the active item. Use the right rail
          for palette, basket, controls, and project settings.
        </p>
      </div>
      <WudlingScatter
        className="planner-toolbar__ornament"
        items={["cap", "plain", "sunhat"]}
        layout="row"
        size="sm"
      />
    </div>
  )
}
