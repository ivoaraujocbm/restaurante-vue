import HomeView from "@/views/HomeView.vue";
import RestauranteView from "@/views/restaurantes/RestauranteView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home',  component: HomeView },
    { path: '/restaurantes', name: 'restaurantes', component: RestauranteView }
  ]
});

export default router;
