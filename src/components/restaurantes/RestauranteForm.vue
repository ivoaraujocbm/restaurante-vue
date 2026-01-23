<script setup>
import BaseButton from '../base/BaseButton.vue';
import BaseInput from '../base/BaseInput.vue';
import { reactive, watch } from 'vue';

const props = defineProps({
  restaurante: Object
})

const emit = defineEmits(['salvar', 'cancelar'])

const form = reactive({
  id: null, 
  nome: '', 
  categoria: '',
  status: 'aberto'
})

watch(
  () => props.restaurante, 
  (novo) => {
    if (novo) Object.assign(form, { id: null, nome: '', categoria: '', status: 'aberto' })
  }, 
  { immediate: true }
)

function salvar(){
  emit('salvar', { ...form })
}

</script>

<template>
  <div class="card">
    <h2>{{ restaurante ? 'Editar Restaurante' : 'Novo Restaurante' }}</h2>

    <BaseInput v-model="form.nome" placeholder="Nome do  restaurante" />
    <BaseButton v-model="form.categoria" placeholder="Categoria" />

    <select v-model="form.status" class="base=select">
      <option value="aberto">Aberto</option>
      <option value="fechado">Fechado</option>
    </select>

    <div class="actions">
      <BaseButton variant="primary" @click="salvar">Salvar</BaseButton>
      <BaseButton variant="secondary" @click="$emit('cancelar')">Cancelar</BaseButton>
    </div>
  </div>
</template>