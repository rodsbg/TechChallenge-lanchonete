const Campanha = require('../models/Campanha');

const criarCampanha = async (CampanhaData) => {
  try {
    const campanha = new Produto(CampanhaData);
    await campanha.save();
    return campanha;
  } catch (error) {
    throw new Error('Erro ao criar o produto.');
  }
};

async function listarCampanhas() {
    return Cliente.find();
  }
module.exports = { criarCampanha, listarCampanhas };