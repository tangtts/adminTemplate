import { defineStore } from "pinia";
interface IColorStyle {
  mode: 'light' | "dark";
}

export const styleStore =  defineStore("styleStoreId", {
  state: (): IColorStyle => {
    return {
      mode: "light",
    };
  },
  actions: {
    changeMode(status: IColorStyle["mode"]) {
      this.mode = status;
    },
  },
});

