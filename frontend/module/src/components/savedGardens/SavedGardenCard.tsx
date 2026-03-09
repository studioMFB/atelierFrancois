import type { PlannerProjectSummary } from "@atelierfrancois/lilwud-sdk";
import { Link } from "react-router-dom";

interface SavedGardenCardProps {
  project: PlannerProjectSummary;
  onDelete: (id: number) => Promise<void>;
}

export function SavedGardenCard({ project, onDelete }: SavedGardenCardProps) {
  return (
    <article className="panel">
      <p className="eyebrow">{project.surfaceTheme}</p>
      <h2>{project.name}</h2>
      <p>{project.summary}</p>
      <p className="muted-copy">
        {project.width}m x {project.depth}m, updated {new Date(project.updatedUtc).toLocaleDateString("en-GB")}
      </p>
      <div className="button-row button-row--compact">
        <Link className="primary-button" to={`/planner?projectId=${project.id}`}>
          Open in planner
        </Link>
        <button className="link-button" onClick={() => void onDelete(project.id)} type="button">
          Delete
        </button>
      </div>
    </article>
  );
}
