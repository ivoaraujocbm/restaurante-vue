<template>
  <button 
    class="base-button" 
    :class="variant" 
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
defineEmits(['click']) // Declare o evento de clique
</script>

<style scoped>
/* O código de estilo que você mandou está correto, 
   mas ele depende das variáveis abaixo */
.base-button {
  padding: 8px 16px; /* Valores fixos caso a variável falhe */
  border-radius: 4px;
  cursor: pointer;
  border: none;
  font-weight: 500;
}

.success { background-color: #10b981; color: white; }
.secondary { background-color: #a9bff0; color: #374151; }
.danger { background-color: #ef4444; color: white; }
</style>