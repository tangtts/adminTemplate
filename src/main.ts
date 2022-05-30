import { Component, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import * as Icons from "@element-plus/icons-vue";
import { createPinia } from "pinia";
const app = createApp(App);
import Directives from "@/plugins/directives";
const ObjKey = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

ObjKey(Icons).forEach((icon) => {
  app.component(icon, Icons[icon]);
});
app.use(Directives);
app.use(createPinia());
app.use(router);
app.mount("#app");
