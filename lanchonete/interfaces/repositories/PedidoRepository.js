const Pedido = require('../../domain/models/Pedido');
const Pagamento = require('../../domain/models/Pagamento');

const criarPedido = async (PedidoData) => {
  try {
    const pedido = new Pedido(PedidoData);
    await pedido.save();
    const fakeCheckout = new Pagamento(PedidoData)
    await fakeCheckout.save();
    return pedido;
  } catch (error) {
    throw new Error('Erro ao criar pedido.');
  }
};

async function listarPedidos() {
    return Pedido.find();
  }

const buscarpedidosporcpfPedidos = async (cpf) => {
  try {
    const pedidos = await Pedido.find({ cpf });
    return pedidos;
  } catch (error) {
    throw new Error('Erro buscar pedido pelo cpf.');
  }
};

module.exports = { criarPedido, listarPedidos, buscarpedidosporcpfPedidos };