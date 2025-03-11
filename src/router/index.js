import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ReadyMeals from "@/pages/ReadyMeals.vue";
import Vegetables from "@/pages/Vegetables.vue";
import Dairy from "@/pages/Dairy.vue";
import Bakery from "@/pages/Bakery.vue";
import Drinks from "@/pages/Drinks.vue";
import Sweets from "@/pages/Sweets.vue";
import MeatFish from "@/pages/MeatFish.vue";
import Frozen from "@/pages/Frozen.vue";
import HealthyLiving from "@/pages/HealthyLiving.vue";
import Grocery from "@/pages/Grocery.vue";
import Kids from "@/pages/Kids.vue";
import Pets from "@/pages/Pets.vue";
import HomeGoods from "@/pages/HomeGoods.vue";
import Urgent from "@/pages/Urgent.vue";
import Page from "@/pages/Page.vue";
import Recepts from "@/pages/Recepts.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/ready-meals",
      name: "ReadyMeals",
      component: ReadyMeals,
    },
    {
      path: "/vegetables",
      name: "Vegetables",
      component: Vegetables,
    },
    {
      path: "/dairy",
      name: "Dairy",
      component: Dairy,
    },
    {
      path: "/bakery",
      name: "Bakery",
      component: Bakery,
    },
    {
      path: "/drinks",
      name: "Drinks",
      component: Drinks,
    },
    {
      path: "/sweets",
      name: "Sweets",
      component: Sweets,
    },
    {
      path: "/meat-fish",
      name: "MeatFish",
      component: MeatFish,
    },
    {
      path: "/frozen",
      name: "Frozen",
      component: Frozen,
    },
    {
      path: "/healthy-living",
      name: "HealthyLiving",
      component: HealthyLiving,
    },
    {
      path: "/grocery",
      name: "Grocery",
      component: Grocery,
    },
    {
      path: "/kids",
      name: "Kids",
      component: Kids,
    },
    {
      path: "/pets",
      name: "Pets",
      component: Pets,
    },
    {
      path: "/home-goods",
      name: "HomeGoods",
      component: HomeGoods,
    },
    {
      path: "/urgent",
      name: "Urgent",
      component: Urgent,
    },
    {
      path: "/product/:id",
      name: "Page",
      component: Page,
    },
    {
      path: "/recipes/:id",
      name: "Recipes",
      component: Recepts,
    },
  ],
});

export default router;
