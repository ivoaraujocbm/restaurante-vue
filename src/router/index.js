import CategoriasView from "@/views/CategoriasView.vue";
import DashboardView from "@/views/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import PdvView from "@/views/PdvView.vue";
import PedidosView from "@/views/PedidosView.vue";
import ProdutosView from "@/views/ProdutosView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home',  component: HomeView },
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
    { path: '/categorias', name: 'categorias', component:CategoriasView },
    { path: '/produtos', name: 'produtos', component: ProdutosView },
    { path: '/pedidos', name: 'pedidos', component: PedidosView },
    { path: '/pdv', name: 'pdv', component: PdvView }
  ]
});

export default router;
