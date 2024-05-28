
const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
  cpf: {
    type: Number,
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
  idPreferencia: { 
    type: String, 
    required: true 
  },
  preco: {
    type: String,
    required: true,
  },
  dataCriacao: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Pagamentos', pagamentoSchema);
