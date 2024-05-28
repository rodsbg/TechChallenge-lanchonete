require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");
const { connectDB } = require('./database');

const ClienteService = require('../application/services/ClienteService');
const ClienteRepository = require('../interfaces/repositories/ClienteRepository');
const ClienteController = require('../interfaces/controllers/ClienteController');
const CampanhaService = require('../application/services/CampanhaService');
const ProdutoRoute = require('../application/routes/ProdutoRoute');
const clienteRoute = require('../application/routes/ClienteRoute');
const campanhaRoute = require('../application/routes/CampanhaRoute');
const pedidoRoute = require('../application/routes/PedidoRoute');
const pagamentoRoute = require('../application/routes/FakecheckoutRoute');


// Swagger configuration options
const options = require('../docs/swagger');
const specs = swaggerJsdoc(options);


// Connect to MongoDB
connectDB();

// Configuração do Express
const app = express();
app.use(bodyParser.json());


// Rota para cadastrar um cliente
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', ProdutoRoute);
app.use('/api', clienteRoute);
app.use('/api', campanhaRoute);
app.use('/api', pedidoRoute);
app.use('/api', pagamentoRoute);



module.exports = app;
