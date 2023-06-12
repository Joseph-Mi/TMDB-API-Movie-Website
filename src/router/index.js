import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Purchase from "../views/PurchaseView.vue";
import Cart from "../views/CartView.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/purchase",
      component: Purchase,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ],
});