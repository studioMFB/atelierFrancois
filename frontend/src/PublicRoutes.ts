import type { RouteRecordRaw } from "vue-router";
import { RouteProviders } from "@/providers";


const routes: RouteRecordRaw = {
  name: RouteProviders.Projects,
  path: RouteProviders.Projects,
  components: {
    Content: () => import("@/views/ProjectsPage.vue"),
  },
  
};

export default routes;