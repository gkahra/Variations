import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  {
    name: "index",
    path: "/",
    component: () => import("./views/home.vue"),
  },
  {
    name: "level",
    path: "/:level/:id",
    component: () => import("./views/levels.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
