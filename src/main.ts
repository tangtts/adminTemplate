import { Component, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
// 全局引入
import baseComponent from "@/components/common";
// 如果想按需引入的话
// import baseComponent from "@/components/common/baseArea";

import { createPinia } from "pinia";
const app = createApp(App);
import Directives from "@/plugins/directives";

app.use(Directives);
app.use(baseComponent);
app.use(createPinia());
app.use(router);
app.mount("#app");
