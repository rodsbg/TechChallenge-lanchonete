const pagamentoService = require('../../application/services/PagamentoService');

const listarPagamentos = async(req,res) => {
  try {
    
    const pedido = await pedidoService.listarPagamentos();

    if (!pedido) {
      res.status(404).json({ error: 'Nenhum Pagamento realizado' });
    } else {
      res.status(200).json(pedido);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = {
   listarPagamentos
  };
  