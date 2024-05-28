/// <reference types="vite/client" />
import { createRouter, createWebHistory } from 'vue-router';
import { PageNameProviders, RouteProviders as PathProviders } from '@/providers';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      name: PathProviders.Index,
      path: "/",
      redirect: { name: PageNameProviders.Home },
      components: {
        HeaderBar: () => import("./views/HeaderBar.vue"),
        ContentPage: () => import("./ContentPage.vue"),
      },
      children: [
        {
          name: PageNameProviders.Home,
          path: PathProviders.Home,
          components: {
            Content: () => import("./views/HomePage.vue"),
          },
        },
        {
          name: PageNameProviders.Editor,
          path: PathProviders.Editor,
          components: {
            Content: () => import("./views/EditorPage.vue"),
          },
        },
        {
          name: PageNameProviders.Projects,
          path: PathProviders.Projects,
          components: {
            Content: () => import("./views/ProjectsPage.vue"),
          },
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from) => {

  if (to.meta.requiresPermission) {
    // check
  }

  if (from.meta.hasChanges) {
    const changeWarning = (from.meta.changeWarningMessage as string) || "The current page has changes that will be lost if you leave, are you sure?";
    const confirmation = window.confirm(changeWarning);
    
    if(!confirmation){
      return from;
    }
  }
})

export default router;