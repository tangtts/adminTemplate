import { render } from "vue";
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
  RouterView,
} from "vue-router";

import Layout from "@/components/layout.vue";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { getDynamicRoutes } from "@/axios/api";
import { axiosStore } from "@/store";
const routerHash = createWebHashHistory();
// createWebHashHistory hash 路由
// createWebHistory history 路由1
// createMemoryHistory 带缓存 history 路由

export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        meta: {
          title: "首页",
        },
        component: () => import("@/views/dashbord/index.vue"),
      },
      {
        path: "animation",
        meta: {
          title: "动画",
        },
        component: () => import("@/views/animation/index.vue"),
      },
      {
        path: "icons",
        meta: {
          title: "图标",
        },
        component: () => import("@/views/Icons/index.vue"),
      },
      {
        path: "selectLinkage",
        meta: {
          title: "选择联动",
        },
        component: () => import("@/views/selectLinkage/index.vue"),
      },
      {
        path: "form",
        meta: {
          title: "JSON表单",
        },
        component: () => import("@/views/Form/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: routerHash,
  routes,
});

router.beforeEach(() => {
  nprogress.start();
  getDynamicRoutes().then((res) => {
    axiosStore().addDynamicRoutes(res.data);
  });
});

router.afterEach(() => {
  nprogress.done();
});

export default router;
