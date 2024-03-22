import type { RouteRecordRaw } from "vue-router";
import { RouteProviders } from "@/providers";


const routes: RouteRecordRaw = {
  name: RouteProviders.Testimony,
  path: RouteProviders.Testimony,
  components: {
    Content: () => import("@/views/TestimonyPage.vue"),
  },
  
};

export default routes;