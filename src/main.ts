import { Component, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";

import { createPinia } from "pinia";
const app = createApp(App);
import Directives from "@/plugins/directives";

app.use(Directives);
app.use(createPinia());
app.use(router);
app.mount("#app");
