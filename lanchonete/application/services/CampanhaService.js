const ClienteDTO = require('../dtos/ClienteDTO');

class CampanhaService {
    constructor(clienteRepository) {
      this.clienteRepository = clienteRepository;
    }
  
    async criarPromocao(cpf, mensagem) {
      const clienteExistente = await this.clienteRepository.findByCpf(cpf);
      if (!clienteExistente) {
        throw new Error('Cliente não cadastrado.');
      }
  
      // Lógica para criar a campanha promocional para o cliente
      const campanha = {
        cpf: this.clienteRepository.cpf,
        mensagem: this.clienteRepository.mensagem,
        criadoem: new Date(),
      };
  
      // Exemplo: Salvar a campanha promocional em algum lugar, como no banco de dados
  
      return promotion;
    }
  }
  
  module.exports = CampanhaService;
  