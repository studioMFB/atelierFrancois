import { WudlingScatter } from "@/components/brand/WudlingScatter";

interface PlannerToolbarProps {
  loadingProject: boolean
}

export function PlannerToolbar({ loadingProject }: PlannerToolbarProps) {
  return (
    <div className="planner-toolbar">
      <div className="planner-toolbar__copy">
        {loadingProject ? <span className="pill">Loading saved garden...</span> : null}
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
