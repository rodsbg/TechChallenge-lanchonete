const pedidoRepository = require('../../interfaces/repositories/PagamentosRepository');

async function listarPagamentos() {
  
  return pedidoRepository.listarPagamentos();
}

module.exports = { listarPagamentos  }