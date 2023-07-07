const pedidoRepository = require('../../interfaces/repositories/PagamentoRepository');

async function listarPagamentos() {
  
  return pedidoRepository.listarPagamentos();
}

module.exports = { listarPagamentos  }