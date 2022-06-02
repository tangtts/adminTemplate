import * as Icons from "@element-plus/icons-vue";
import { App } from "vue";
const ObjKey = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

export default {
  install(app: App) {
    ObjKey(Icons).forEach((icon) => {
      app.component(icon, Icons[icon]);
    });
  },
};
