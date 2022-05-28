import { defineStore } from "pinia";
import { Mode } from "types/common";
interface IColorStyle {
  elColor: string;
  mode: Mode | "";
}

export default defineStore("styleStoreId", {
  state: (): IColorStyle => {
    return {
      elColor: "",
      mode: "",
    };
  },
  actions: {
    changeColor(elColor: string) {
      this.elColor = elColor;
      document.documentElement.style.setProperty("--el-color-primary", color);
    },
  },
});
