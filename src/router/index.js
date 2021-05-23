import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Meals from "@/views/Meals.vue";
import Restaurants from "@/views/Restaurants.vue";
import SecretFormula from "@/views/SecretFormula.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meals",
    name: "Meals",
    component: Meals,
  },
  {
    path: "/restaurants",
    name: "Restaurants",
    component: Restaurants,
  },
  {
    path: "/secret-formula",
    name: "SecretFormula",
    component: SecretFormula,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
