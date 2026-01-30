import { ref } from "vue";

const produtos = ref([
  {
    id: 1,
    nome: 'Coca-Cola',
    preco: 8.00,
    categoriaId: 1,
    descricao: 'Lata 350ml'
  }
])

export function useProdutos(){
  function adicionar(produto){
    const ultimoId = produtos.value.length > 0 
        ? Math.max(...produtos.value.map(c => c.id))
        : 0;
    produto.id = ultimoId + 1
    produtos.value.push(produto)
  }

  function atualizar(produto){
    const index = produtos.value.findIndex(p => p.id === produto.id)
    produtos.value[index] = produto
  }

  function remover(id){
    produtos.value = produtos.value.filter(p => p.id !== id)
  }

  return{
    produtos, 
    adicionar, 
    atualizar, 
    remover
  }
}