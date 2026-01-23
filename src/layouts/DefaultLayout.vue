<script setup>
  import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <div class="page-wrapper">
    <AppHeader />

    <main class="page-container">
      <slot />
    </main>
  </div>
</template>