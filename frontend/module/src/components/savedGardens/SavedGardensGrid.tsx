import type { PlannerProjectSummary } from "@atelierfrancois/lilwud-sdk";

import { SavedGardenCard } from "@/components/savedGardens/SavedGardenCard";

interface SavedGardensGridProps {
  projects: PlannerProjectSummary[];
  loading: boolean;
  error: string | null;
  onDelete: (id: number) => Promise<void>;
}

export function SavedGardensGrid({
  projects,
  loading,
  error,
  onDelete,
}: SavedGardensGridProps) {
  return (
    <section className="saved-grid">
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div className="panel panel--quiet" key={index}>
            Loading...
          </div>
        ))
      ) : projects.length ? (
        projects.map((project) => <SavedGardenCard key={project.id} onDelete={onDelete} project={project} />)
      ) : (
        <div className="panel panel--quiet">
          <p className="eyebrow">No saves yet</p>
          <p>Start in the planner, then save the garden once your layout feels right.</p>
          {error ? <p className="muted-copy">{error}</p> : null}
        </div>
      )}
    </section>
  );
}
