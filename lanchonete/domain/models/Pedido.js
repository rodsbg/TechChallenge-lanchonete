const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
  cpf: {
    type: Number,
    required: false,
  },
  lanche: {
    type: String,
    required: false,
    
  },
  acompanhamento: {
    type: String,
    required: false,
   
  },
  bebida: {
    type: String,
    required: false,
  
    },
    sobremesa: {
        type: String,
        required: false,
    },
  status: {
    type: String,
    enum: ['Recebido', 'Em preparacao', 'Pronto', 'Finalizado'],
    required: true,
  },
  ondecomer: {
    type: String,
    required: true,
  },
  preco: {
    type: String,
    required: true,
  }
  

});

module.exports = mongoose.model('Pedidos', pedidosSchema);
