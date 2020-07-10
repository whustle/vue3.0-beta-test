import { createRouter, createWebHistory } from "vue-router";
import Home1 from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home1
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
