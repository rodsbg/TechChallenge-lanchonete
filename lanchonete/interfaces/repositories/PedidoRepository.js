const Pedido = require('../../domain/models/Pedido');
const Pagamento = require('../../domain/models/Pagamento');

const criarPedido = async (PedidoData) => {
  try {

    const pedido = new Pedido(PedidoData);
    await pedido.save();
    console.log(pedido);
    return pedido;
  } catch (error) {
    throw new Error('Erro ao criar pedido.' + error.Error);
  }
};

async function listarPedidos() {
    return Pedido.find();
  }

const buscarpedidosporcpfPedidos = async (cpf) => {
    try {
        console.log("Pedido repository: buscarpedidosporcpfPedidos");
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