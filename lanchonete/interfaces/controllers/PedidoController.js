const pedidoService = require('../../application/services/PedidoService');

const criarPedido = async (req, res) => {
  try {
    //Não é necessário validar cpf para cadastrar o pedido
    //verificando se existe o lanche, acompanhamento e a bebida
    const pedido = await pedidoService.cadastrarPedido(req.body);
    //inicia o fake checkout
       
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const listarPedidos = async(req,res) => {
  try {
    
    const pedido = await pedidoService.listarPedidos();

    if (!pedido) {
      res.status(404).json({ error: 'Nenhum Pedido Cadastrado' });
    } else {
      res.status(200).json(pedido);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
    criarPedido, listarPedidos
  };
  