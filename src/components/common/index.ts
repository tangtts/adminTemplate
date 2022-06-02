import { App } from "vue";
import baseIcon from "./baseIcon";
import baseArea from "./baseArea";
const components = [baseIcon, baseArea];
export default {
  install(app: App) {
    components.map((component) => {
      app.use(component);
    });
  },
};
