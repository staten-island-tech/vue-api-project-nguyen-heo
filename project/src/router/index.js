import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Astronomy from "../views/Astronomy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/astronomy",
    name: "Astronomy",
    component: Astronomy,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
