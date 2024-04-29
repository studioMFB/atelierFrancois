/// <reference types="vite/client" />
import { createRouter, createWebHistory } from 'vue-router';
import { RouteProviders } from '@/providers';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      name: RouteProviders.Index,
      path: "/",
      components: {
        NavBar: () => import("./views/navBar.vue"),
        FullPage: () => import("./FullPage.vue"),
      },
      children: [
        {
          name: RouteProviders.Home,
          path: RouteProviders.Home,
          components: {
            Content: () => import("./views/HomePage.vue"),
          },
        },
        {
          name: RouteProviders.Testimony,
          path: RouteProviders.Testimony,
          components: {
            Content: () => import("./views/TestimonyPage.vue"),
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