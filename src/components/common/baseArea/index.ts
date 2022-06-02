import { App } from "vue";
import selectArea from "./src/index.vue";

export default {
  install(app: App) {
    app.component("baseArea", selectArea);
  },
};
