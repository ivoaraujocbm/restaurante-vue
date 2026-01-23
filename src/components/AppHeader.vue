<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="bg-primary">
    <div class="page-container flex justify-between items-center">
      <h1 class="text-white font-semibold">
        Restaurante App
      </h1>

      <nav class="flex gap-4">
          <RouterLink to="/" class="nav-link">Início</RouterLink>
          <RouterLink to="/categorias" class="nav-link">Categorias</RouterLink>
          <RouterLink to="/produtos" class="nav-link">Produtos</RouterLink>
      </nav>
    </div>
  </header>
</template>