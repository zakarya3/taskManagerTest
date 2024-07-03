import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import TaskList from "@/components/TaskList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "register",
    component: Register,
  },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/tasks", component: TaskList, meta: { requiresAuth: true } },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("access_token");
  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
