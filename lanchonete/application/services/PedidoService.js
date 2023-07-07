const pedidoRepository = require('../../interfaces/repositories/PedidoRepository');

async function cadastrarPedido(pedidoData) {
  
  const pedido = await pedidoRepository.criarPedido(pedidoData);
  return pedido;
}
async function listarPedidos() {
  
  return pedidoRepository.listarPedidos();
}


const buscarpedidosporcpfPedidos = async (cpf) => {
  try {
    return await produtoRepository.buscarpedidosporcpfPedidos(cpf);
  } catch (error) {
    throw new Error('Nenhum pedido cadastrado para o cliente');
  }
};

module.exports = { cadastrarPedido, listarPedidos, buscarpedidosporcpfPedidos }