import { ref } from "vue";

const restaurantes = ref([
  {
    id: 1,
    nome: 'Pizzaria Central',
    categoria: 'Pizzaria',
    status: 'aberto',
    criadoEm: new Date()
  },
  {
    id: 2,
    nome: 'Burger House',
    categoria: 'Hamburgueria',
    status: 'fechado',
    criadoEm: new Date()
  }
])

export function useRestaurantes(){
  function adicionar(restaurante){
    restaurante.id = Date.now()
    restaurante.criadoEm = new Date()
    restaurantes.value.push(restaurante)
  }

  function atualizar(restaurante){
    const index = restaurantes.value.findIndex(r => r.id === restaurante.id)
    restaurantes.value[index] = restaurante
  }

  function remover(id){
    restaurantes.value = restaurantes.value.filter(r => r.id !==id)
  }

  return {
  restaurantes,
  adicionar, 
  atualizar,
  remover
  }
}

