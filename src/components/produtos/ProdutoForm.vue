<script setup>
  import { reactive, watch } from 'vue';

  const props = defineProps({
    produto: Object,
    categorias: Array
  })

  const emit = defineEmits(['salvar', 'cancelar'])

  const form = reactive({
    id: null, 
    nome: '', 
    preco: 0, 
    categoriaId: null,
    descricao: ''
  })

  watch(() => props.produto, (novo) => {
    if (novo) Object.assign(form, novo)
    else {
      form.id = null
      form.nome = ''
      form.preco = 0
      form.categoriaId = null
      form.descricao = ''
    }
  }, { immediate: true })
</script>