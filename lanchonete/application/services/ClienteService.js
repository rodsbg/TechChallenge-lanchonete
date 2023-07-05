const { exit } = require('process');
const ClienteDTO = require('../dtos/ClienteDTO');

class ClienteService {
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async cadastrarCliente(nome, email, cpf) {
    // Verificar se o CPF já está cadastrado
    const clienteExistente = await this.clienteRepository.findByCpf(cpf);
    if (clienteExistente) {
      throw new Error('CPF já cadastrado');
    }

    const clienteDTO = new ClienteDTO(nome, email, cpf);
    const cliente = await this.clienteRepository.create(clienteDTO);

    return cliente;
  }
  async obterClientePorCpf(cpf) {
    const clienteExistente = await this.clienteRepository.findByCpf(cpf);
    if (!clienteExistente) {
      throw new Error('CPF não cadastrado');
      exit;
    }
      return clienteExistente;

  
  }
}

module.exports = ClienteService;
