<template>
  <button class="base-button" :class="variant">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary' // primary | secondary | danger
  }
})
</script>

<style scoped>
.base-button {
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  border: none;
  transition: opacity 0.2s ease;
}

.base-button:hover {
  opacity: 0.9;
}

.primary {
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

.secondary {
  background-color: var(--color-secondary);
  color: var(--color-on-secondary);
}

.danger {
  background-color: var(--color-danger);
  color: white;
}
</style>