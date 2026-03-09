import { useEffect } from "react";
import { Link } from "react-router-dom";

import { WudlingScatter } from "@/components/brand/WudlingScatter";
import { PageMessagePanel } from "@/components/page/PageMessagePanel";
import { PageSectionHeader } from "@/components/page/PageSectionHeader";
import { SavedGardensGrid } from "@/components/savedGardens/SavedGardensGrid";
import { useAuth } from "@/hooks/useAuth";
import { usePlannerProjects } from "@/hooks/usePlannerProjects";

export function SavedGardensPage() {
  const { status } = useAuth();
  const { deleteProject, error, listProjects, loading, projects } = usePlannerProjects();

  useEffect(() => {
    if (status !== "authenticated") {
      return;
    }

    void listProjects();
  }, [status]);

  async function removeProject(id: number) {
    await deleteProject(id);
  }

  if (status !== "authenticated") {
    return (
      <div className="page-shell">
        <PageMessagePanel eyebrow="Saved gardens" title="Create an account to keep your garden layouts.">
          <Link className="primary-button" to="/account">
            Go to account
          </Link>
        </PageMessagePanel>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <PageSectionHeader
        aside={error ? <p className="muted-copy">{error}</p> : null}
        eyebrow="Saved gardens"
        ornament={<WudlingScatter items={["beanie", "sunhat"]} layout="row" size="sm" />}
        title="Return to previous layouts and refine them over time."
      />
      <SavedGardensGrid error={error} loading={loading} onDelete={removeProject} projects={projects} />
    </div>
  );
}
