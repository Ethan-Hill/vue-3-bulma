import { createRouter, createWebHistory } from "vue-router";
import Mouse from "../views/Mouse.vue";

const routes = [
  {
    path: "/mouse",
    name: "Mouse",
    component: Mouse,
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("../views/Counter.vue"),
  },
  {
    path: "/counter-state",
    name: "Counter with state",
    component: () => import("../views/CounterState.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
