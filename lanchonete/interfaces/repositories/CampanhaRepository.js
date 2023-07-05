const Campanha = require('../../domain/models/Campanha');

const criarCampanha = async (CampanhaData) => {
  try {
    const campanha = new Produto(CampanhaData);
    await campanha.save();
    return campanha;
  } catch (error) {
    throw new Error('Erro ao criar o produto.');
  }
};

module.exports = {
    criarCampanha,
  };