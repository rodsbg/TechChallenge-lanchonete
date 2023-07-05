const clienteRepository = require('../../interfaces/repositories/ClienteRepository');
const campanhaRepository = require('../../interfaces/repositories/PedidoRepository');

async function cadastrarPedido(pedidoData) {
  const clienteExistente = await clienteRepository.buscarClientePorCpf(pedidoData.cpf);
  if (!clienteExistente) {
    throw new Error('CPF não cadastrado');
  }
  const pedido = await pedidoRepository.criarPedido(pedidoData);
  return pedido;
  }
  return;

//async function listarCampanhas() {
  
 // return campanhaRepository.listarCampanhas();
//}

module.exports = { cadastrarPedido }