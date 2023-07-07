const Pedido = require('../../domain/models/Pedido');

const criarPedido = async (PedidoData) => {
  try {
    const pedido = new Pedido(PedidoData);
    await pedido.save();
    return pedido;
  } catch (error) {
    throw new Error('Erro ao criar pedido.');
  }
};

async function listarPedidos() {
    return Pedido.find();
  }
module.exports = { criarPedido, listarPedidos };