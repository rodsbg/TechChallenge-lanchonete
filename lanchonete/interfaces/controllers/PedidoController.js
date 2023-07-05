const pedidoService = require('../../application/services/PedidoService');

const criarPedido = async (req, res) => {
  try {
    const pedido = await pedidoService.criarPedido(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    criarPedido
  };
  