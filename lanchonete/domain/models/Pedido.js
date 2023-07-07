const mongoose = require('mongoose');

const pedidosSchema = new mongoose.Schema({
  cpf: {
    type: Number,
    required: false,
  },
  lanche: {
    type: String,
    required: true,
    
  },
  acompanhamento: {
    type: String,
    required: true,
   
  },
  bebida: {
    type: String,
    required: true,
  
  },
  status: {
    type: String,
    required: true,
  },
  ondecomer: {
    type: String,
    required: true,
  },
  

});

module.exports = mongoose.model('Pedidos', pedidosSchema);
