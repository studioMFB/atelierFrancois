import { useAppContext } from "@/store/appContext";

export function usePlannerProjects() {
  const { plannerProjects, services } = useAppContext();

  return {
    projects: plannerProjects.items,
    loading: plannerProjects.status === "loading",
    error: plannerProjects.error,
    listProjects: services.plannerProjects.getList,
    getProject: services.plannerProjects.getItem,
    saveProject: services.plannerProjects.saveItem,
    deleteProject: services.plannerProjects.deleteItem,
  };
}
