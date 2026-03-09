import { useEffect } from "react";

import {
  deletePlannerProject,
  getPlannerProject,
  listPlannerProjects,
  savePlannerProject,
  toPlannerProjectSummary,
} from "@/services/plannerProjects";
import { ACTION_TYPE, type AppDispatch } from "@/store/appReducer";
import type { PlannerProjectService } from "@/store/appContext";
import type { LilWudAppState } from "@/types/app";

export function useHydratorsPlannerProjects(
  state: LilWudAppState,
  dispatch: AppDispatch,
): PlannerProjectService {
  useEffect(() => {
    if (state.auth.status !== "authenticated") {
      dispatch({ type: ACTION_TYPE.CLEAR_PLANNER_PROJECTS });
    }
  }, [dispatch, state.auth.status]);

  return {
    async getList() {
      if (state.auth.status !== "authenticated") {
        dispatch({ type: ACTION_TYPE.CLEAR_PLANNER_PROJECTS });
        return [];
      }

      dispatch({
        type: ACTION_TYPE.SET_PLANNER_PROJECTS_STATUS,
        payload: "loading",
      });

      try {
        const projects = await listPlannerProjects();
        dispatch({ type: ACTION_TYPE.SET_PLANNER_PROJECTS, payload: projects });
        return projects;
      } catch (error) {
        dispatch({
          type: ACTION_TYPE.SET_PLANNER_PROJECTS_STATUS,
          payload: "error",
        });
        dispatch({
          type: ACTION_TYPE.SET_PLANNER_PROJECTS_ERROR,
          payload: error instanceof Error ? error.message : null,
        });
        return [];
      }
    },
    getItem(id) {
      return getPlannerProject(id);
    },
    async saveItem(payload, projectId) {
      const project = await savePlannerProject(payload, projectId);
      dispatch({
        type: ACTION_TYPE.UPSERT_PLANNER_PROJECT_SUMMARY,
        payload: toPlannerProjectSummary(project),
      });
      return project;
    },
    async deleteItem(id) {
      await deletePlannerProject(id);
      dispatch({
        type: ACTION_TYPE.REMOVE_PLANNER_PROJECT_SUMMARY,
        payload: id,
      });
    },
  };
}
