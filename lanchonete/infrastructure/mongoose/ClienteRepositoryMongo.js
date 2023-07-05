const Cliente = require('../../domain/models/Cliente');

class ClienteRepositoryMongo {
  constructor(clienteModel) {
    this.clienteModel = clienteModel;
  }

  async findByCpf(cpf) {
    const clienteData = await this.clienteModel.findOne({ cpf });
    if (!clienteData) {
      return null;
    }

    const { _id, nome, email } = clienteData;
    const cliente = new Cliente(_id, nome, email, cpf);
    return cliente;
  }

  async create(clienteDTO) {
    const { nome, email, cpf } = clienteDTO;
    const clienteData = await this.clienteModel.create({ nome, email, cpf });
    const { _id } = clienteData;
    const cliente = new Cliente(_id, nome, email, cpf);
    return cliente;
  }
}

module.exports = ClienteRepositoryMongo;
