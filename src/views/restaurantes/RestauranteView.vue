<script setup>
import BaseButton from '@/components/base/BaseButton.vue';
import RestauranteForm from '@/components/restaurantes/RestauranteForm.vue';
import RestauranteList from '@/components/restaurantes/RestauranteList.vue';
import { ref } from 'vue';
import { useRestaurantes } from '@/composables/useRestaurantes';

const { restaurantes, adicionar, atualizar, remover } = useRestaurantes()

const mostrarForm = ref(false)
const selecionado = ref(null)

function novo() {
  selecionado.value = null
  mostrarForm.value = true
}

function editar(restaurante){
  selecionado.value = { ...restaurante }
  mostrarForm.value = true
}

function salvar(restaurante){
  restaurante.id ? atualizar(restaurante) : adicionar(restaurante)
  mostrarForm.value = false
}

</script>

<template>
  <section class="page">
    <header>
      <h1 class="title-page">Restaurantes</h1>
      <BaseButton @click="novo">Novo Restaurante</BaseButton>
    </header>

    <RestauranteList
      :restaurantes="restaurantes"
      @editar="editar"
      @excluir="remover"
    />

    <RestauranteForm 
      v-if="mostrarForm"
      :restaurante="selecionado"
      @salvar="salvar"
      @cancelar="mostrarForm = false"
    />
  </section>
</template>