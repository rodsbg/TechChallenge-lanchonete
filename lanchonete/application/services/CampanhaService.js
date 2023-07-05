const clienteRepository = require('../../interfaces/repositories/ClienteRepository');
const campanhaRepository = require('../../interfaces/repositories/CampanhaRepository');

async function cadastrarCampanha(campanhaData) {
  const clienteExistente = await clienteRepository.buscarClientePorCpf(campanhaData.cpf);
  if (!clienteExistente) {
    throw new Error('CPF não cadastrado');
  }
  else {
  const campanha = await campanhaRepository.criarCampanha(campanhaData);
  return campanha;
  }
  return;
}
async function listarCampanhas() {
  
  return campanhaRepository.listarCampanhas();
}

module.exports = { cadastrarCampanha, listarCampanhas }