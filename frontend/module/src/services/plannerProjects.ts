import type {
  PlannerProject,
  PlannerProjectPayload,
  PlannerProjectSummary,
} from "@atelierfrancois/lilwud-sdk";

import { apiClient } from "@/lib/api";

export function listPlannerProjects(): Promise<PlannerProjectSummary[]> {
  return apiClient.listPlannerProjects();
}

export function getPlannerProject(id: number): Promise<PlannerProject> {
  return apiClient.getPlannerProject(id);
}

export function savePlannerProject(
  payload: PlannerProjectPayload,
  projectId?: number | null,
): Promise<PlannerProject> {
  if (projectId) {
    return apiClient.updatePlannerProject(projectId, payload);
  }

  return apiClient.createPlannerProject(payload);
}

export function deletePlannerProject(id: number): Promise<void> {
  return apiClient.deletePlannerProject(id);
}

export function toPlannerProjectSummary(
  project: PlannerProject,
): PlannerProjectSummary {
  return {
    id: project.id,
    name: project.name,
    summary: project.summary,
    surfaceTheme: project.surfaceTheme,
    width: project.width,
    depth: project.depth,
    createdUtc: project.createdUtc,
    updatedUtc: project.updatedUtc,
  };
}
