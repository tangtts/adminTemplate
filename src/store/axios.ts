import { routes } from "./../router/index";
import { defineStore } from "pinia";
import { Mode } from "types/common";
interface IColorStyle {
  elColor: string;
  mode: Mode | "";
}

export default defineStore("axiosStoreId", {
  state: () => {
    return {
      DynamicRoutes: [],
    };
  },
  actions: {
    addDynamicRoutes(routes: []) {
      this.DynamicRoutes = routes;
    },
  },
});
