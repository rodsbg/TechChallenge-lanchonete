const clienteRepository = require('../../interfaces/repositories/ClienteRepository');
const campanhaRepository = require('../../interfaces/repositories/CampanhaRepository');

async function cadastrarCampanha(clienteData) {
  const clienteExistente = await clienteRepository.buscarClientePorCpf(clienteData.cpf);
  if (!clienteExistente) {
    throw new Error('CPF não cadastrado');
  }
  else {
  const campanha = await campanhaRepository.cadastrarCampanha(clienteData);
  }
  return campanha;
}
async function listarCampanhas() {
  return clienteRepository.listarCampanhas();
}

module.exports = { cadastrarCampanha, listarCampanhas }