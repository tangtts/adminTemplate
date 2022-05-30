import { defineStore } from "pinia";
import { Mode } from "types/common";
interface IColorStyle {
  elColor: string;
  mode: Mode | "";
  asideFoldStatus: "Fold" | "UnFold";
}

export default defineStore("styleStoreId", {
  state: (): IColorStyle => {
    return {
      elColor: "",
      mode: "",
      asideFoldStatus: "Fold",
    };
  },
  actions: {
    changeColor(elColor: IColorStyle["elColor"]) {
      this.elColor = elColor;
      document.documentElement.style.setProperty("--el-color-primary", elColor);
    },
    changeAsideFoldStatus(status: IColorStyle["asideFoldStatus"]) {
      this.asideFoldStatus = status;
    },
  },
});
