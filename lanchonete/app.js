const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const ClienteDTO = require('./application/dtos/ClienteDTO');
const ClienteService = require('./application/services/ClienteService');
const ClienteRepository = require('./domain/repositories/ClienteRepository');
const ClienteController = require('./interfaces/controllers/ClienteController');
const ClienteRepositoryMongo = require('./infrastructure/mongoose/ClienteRepositoryMongo');
const CampanhaService = require('./application/services/CampanhaService');
const ProdutoRoutes = require('./application/routes/ProdutoRoutes');

// Configurar a conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/techchallengelanchonete', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

const clienteModel = mongoose.model('Cliente', {
  nome: String,
  email: String,
  cpf: String,
});

// Configuração do Express
const app = express();
app.use(bodyParser.json());

// Configuração dos componentes da arquitetura hexagonal
const clienteRepository = new ClienteRepositoryMongo(clienteModel);
const clienteService = new ClienteService(clienteRepository);
const clienteController = new ClienteController(clienteService);
const campanhaService = new CampanhaService(clienteRepository);

// Rota para cadastrar um cliente
app.post('/clientes', (req, res) => clienteController.cadastrarCliente(req, res));
app.get('/clientes/:cpf', (req, res) => clienteController.obterClientePorCpf(req, res));
app.post('/promocao', (req, res) => clienteController.criarPromocao(req, res));

app.use('/', ProdutoRoutes);

module.exports = app;