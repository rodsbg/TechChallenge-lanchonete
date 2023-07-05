// src/routes/produtoRoutes.js
const express = require('express');
const ProdutoController = require('../../interfaces/controllers/ProdutoController');

const router = express.Router();

router.post('/produtos', ProdutoController.criarProduto);
router.put('/produtos/:id', ProdutoController.editarProduto);
router.delete('/produtos/:id', ProdutoController.removerProduto);
router.get('/produtos/categoria/:categoria', ProdutoController.buscarProdutosPorCategoria);

module.exports = router;
