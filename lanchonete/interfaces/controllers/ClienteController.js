class ClienteController {
    constructor(clienteService,campanhaService) {
      this.clienteService = clienteService;
      this.campanhaService = campanhaService;
    }
  
    async cadastrarCliente(req, res) {
      const { nome, email, cpf } = req.body;
  
      try {
        const cliente = await this.clienteService.cadastrarCliente(nome, email, cpf);
        res.status(201).json(cliente);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
    async obterClientePorCpf(req, res) {
        try {
          const cpf = req.params.cpf;
          const cliente = await this.clienteService.obterClientePorCpf(cpf);
    
          if (!cliente) {
            res.status(404).json({ error: 'Cliente não encontrado' });
          } else {
            res.status(200).json(cliente);
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    async criarPromocao(req, res) {
        const { cpf, mensagem } = req.body;
    
        try {
          const promocao = await this.campanhaService.criarPromocao(cpf, mensagem);
          res.status(201).json({ mensagem: 'Promoção criada com sucesso.', promotion });
        } catch (error) {
          res.status(400).json({ error: error.message });
        }
      }
  }
  
  module.exports = ClienteController;
  
 
  