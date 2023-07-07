const Pagamento = require('../../domain/models/Pagamento');

async function listarPagamentos() {
    return Pagamento.find();
  }
module.exports = { listarPagamentos };