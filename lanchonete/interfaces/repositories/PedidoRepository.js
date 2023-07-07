const Pedido = require('../../domain/models/Pedido');
const Pagamento = require('../../domain/models/Pagamento');

const criarPedido = async (PedidoData) => {
  try {
    const pedido = new Pedido(PedidoData);
    await pedido.save();
    const fakeCheckout = new Pagamento(PedidoData)
    await fakeCheckout.save();
    //altera o status do pedido apos o pagamento para Recebido
    const StatusPedido = this.editarStatusPedido(PedidoData.cpf, PedidoData)
    await StatusPedido.save();
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

const editarStatusPedido = async (cpf, PedidoData) => {
  try {
    const pedido = await Produto.findByIdAndUpdate(cpf, PedidoData, {
      new: true,
    });
    return pedido;
  } catch (error) {
    throw new Error('Erro ao editar o produto.');
  }
};


module.exports = { criarPedido, listarPedidos, buscarpedidosporcpfPedidos, editarStatusPedido };