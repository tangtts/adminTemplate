import { routes } from "./../router/index";
import { defineStore } from "pinia";
import { Mode } from "types/common";
import { RouteRecordRaw, useRouter } from "vue-router";

interface IAxios {
  DynamicRoutes: RouteRecordRaw | [];
}

export default defineStore("axiosStoreId", {
  state: (): IAxios => {
    return {
      DynamicRoutes: [],
    };
  },
  actions: {
    addDynamicRoutes(routes: RouteRecordRaw) {
      const router = useRouter();
      this.DynamicRoutes = routes;

      // router.addRoute(JSON.parse(routes));
    },
  },
});
