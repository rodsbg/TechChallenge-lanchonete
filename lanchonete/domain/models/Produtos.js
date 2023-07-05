// src/app/models/produto.js
const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ['lanche', 'acompanhamento', 'bebida', 'sobremesa'],
    required: true,
  },
});

module.exports = mongoose.model('Produto', ProdutoSchema);
