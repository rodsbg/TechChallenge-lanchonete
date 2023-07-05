const Campanha = require('../../domain/models/Pedido');

const criarPedido = async (PedidoData) => {
  try {
    const pedido = new Campanha(PedidoData);
    await pedido.save();
    return pedido;
  } catch (error) {
    throw new Error('Erro ao criar campanha.');
  }
};

//async function listarCampanhas() {
//    return Campanha.find();
//  }
module.exports = { criarPedido };