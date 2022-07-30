import { render } from "vue";
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
const routerHash = createWebHashHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由1
// createMemoryHistory 带缓存 history 路由

export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
        path: "/",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/index/index.vue"),
      },
  
];

const router = createRouter({
  history: routerHash,
  routes,
});

router.beforeEach(() => {
  nprogress.start();
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
