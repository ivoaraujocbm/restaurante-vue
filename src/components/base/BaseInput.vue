<!-- eslint-disable vue/no-mutating-props -->
<template>
  <input
    class="base-input"
    v-bind="$attrs"
    v-model="model"
  />
</template>

<script setup>

const model = defineModel();

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.base-input {
  width: 100%;
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
}

.base-input:focus {
  outline: none;
  border-color: var(--color-primary);
}
</style>