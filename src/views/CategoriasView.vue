<script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import { ref, reactive } from 'vue'
  import BaseButton from '@/components/base/BaseButton.vue'
  import BaseInput from '@/components/base/BaseInput.vue'

  const categorias = ref([
    { id: 1, nome: 'Bebidas', ativa: true },
    { id: 2, nome: 'Linha Parmegianas', ativa: true },
    { id: 3, nome: 'Linha Churraco', ativa: true }
  ])

  const editando = ref(false)
  const exibirFormulario = ref(false) // Controla a visibilidade do input
  const categoriaParaExcluir = ref(null) // Controla o Modal de confirmação

  const form = reactive({
    id: null,
    nome: ''
  })

  function abrirNovo() {
    limparFormulario()
    exibirFormulario.value = true
  }

  function abrirEdicao(categoria) {
    form.id = categoria.id
    form.nome = categoria.nome
    editando.value = true
    exibirFormulario.value = true // Abre o formulário ao editar
  }

  function fecharFormulario() {
    exibirFormulario.value = false
    limparFormulario()
  }

  // --- LÓGICA DE SALVAMENTO ---
  function confirmarSalvar() {
    if (!form.nome.trim()) return

    if (editando.value) {
      const index = categorias.value.findIndex(c => c.id === form.id)
      if (index !== -1) {
        categorias.value[index].nome = form.nome
      }
    } else {
      const ultimoId = categorias.value.length > 0 
        ? Math.max(...categorias.value.map(c => c.id))
        : 0;

      categorias.value.push({
        id: ultimoId + 1,
        nome: form.nome,
        ativa: true
      })
    }
    fecharFormulario() // Fecha o input e limpa tudo
  }

  // --- LÓGICA DE EXCLUSÃO COM CONFIRMAÇÃO ---
  function solicitarExclusao(categoria) {
    categoriaParaExcluir.value = categoria // Abre o modal
  }

  function confirmarExclusao() {
    if (categoriaParaExcluir.value) {
      categorias.value = categorias.value.filter(c => c.id !== categoriaParaExcluir.value.id)
      categoriaParaExcluir.value = null // Fecha o modal
    }
  }

  // --- UTILITÁRIOS ---
  function limparFormulario() {
    form.id = null
    form.nome = ''
    editando.value = false
  }
  
</script>

<template>
  <DefaultLayout>
    <div class="card p-6 bg-white shadow-sm rounded-lg">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-gray-800">Categorias</h2>
        <BaseButton variant="success" @click="abrirNovo">
          + Categoria
        </BaseButton>
      </div>
      <div v-if="exibirFormulario" class="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 class="text-sm font-bold mb-3 text-gray-600">
          {{ editando ? 'Editar Categoria' : 'Nova Categoria' }}
        </h3>
        <div class="flex flex-col gap-4">
          <BaseInput 
            v-model="form.nome" 
            placeholder="Nome da categoria (ex: Parmegianas)" 
            @keyup.enter="confirmarSalvar"
          />
          <div class="flex gap-2">
            <BaseButton variant="success" @click="confirmarSalvar">
              Salvar
            </BaseButton>
            <BaseButton variant="secondary" @click="fecharFormulario">
              Cancelar
            </BaseButton>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto">
        <h3 class="text-sm font-semibold mb-3 text-gray-500 uppercase tracking-wider">Registros</h3>
        <ul class="divide-y border-t">
          <li v-for="cat in categorias" :key="cat.id" class="py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
              <span class="text-gray-400 font-mono text-xs">#{{ cat.id }}</span>
              <span class="font-medium text-gray-700">{{ cat.nome }}</span>
            </div>
            <div class="flex gap-2">
              <BaseButton variant="secondary" @click="abrirEdicao(cat)">
                Editar
              </BaseButton>
              <BaseButton variant="danger" @click="solicitarExclusao(cat)">
                Excluir
              </BaseButton>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div v-if="categoriaParaExcluir" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h3 class="text-lg font-bold mb-2">Tem certeza?</h3>
        <p class="text-gray-600 mb-6">
          Você deseja excluir a categoria <strong>"{{ categoriaParaExcluir.nome }}"</strong>? Esta ação não pode ser desfeita.
        </p>
        <div class="flex justify-end gap-3">
          <BaseButton variant="secondary" @click="categoriaParaExcluir = null">Não</BaseButton>
          <BaseButton variant="danger" @click="confirmarExclusao">Sim, Excluir</BaseButton>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>