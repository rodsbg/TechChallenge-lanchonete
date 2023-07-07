const pedidoRepository = require('../../interfaces/repositories/PedidoRepository');

async function cadastrarPedido(pedidoData) {
  
  const pedido = await pedidoRepository.criarPedido(pedidoData);
  return pedido;
}
async function listarPedidos() {
  
  return pedidoRepository.listarPedidos();
}

module.exports = { cadastrarPedido, listarPedidos  }