// src/routes/produtoRoutes.js
const express = require('express');
const ProdutoController = require('../../interfaces/controllers/ProdutoController');

const router = express.Router();

/**
 * @openapi
 * /api/produtos:
 *   post:
 *     summary: Inserir produto e categoria
 *     description: Inserir produto e categoria
 *     parameters:
 *     - in: body
 *       name: nome
 *       type: "string"
 *       required: true
 *       description: Inserir o json com nome e categoria como campos
 *     responses:
 *       200:
 *         description: Produto Cadastrado
*/ 
/**
 * @openapi
 * /api/produtos/{id}:
 *   put:
 *     sumario: Alterar o produto pelo id
 *     descricao: Alterar o produto pelo id.
 *     responses:
 *       200:
 *         descricao: Alterar o produto pelo id.
 *     
 */

/**
 * @openapi
 * /api/produtos/{id}:
 *   delete:
 *     sumario: Deletar o produto pelo id
 *     descricao: Deletar o produto pelo id.
 *     responses:
 *       200:
 *         descricao: Deletar o produto pelo id.
 */

/**
 * @openapi
 * /api/produtos/categoria/{categoria}:
 *   get:
 *     sumario: Lista produtos pela categoria
 *     descricao: Necessario inserir a categorias
 *     parameters:
 *     - in: path
 *       name: categoria
 *       type: string
 *       required: true
 *       description: categoria 
 *     responses:
 *       200:
 *         descricao: Lista produtos pela categoria
 */



router.post('/produtos', ProdutoController.criarProduto);
router.put('/produtos/:id', ProdutoController.editarProduto);
router.delete('/produtos/:id', ProdutoController.removerProduto);
router.get('/produtos/categoria/:categoria', ProdutoController.buscarProdutosPorCategoria);

module.exports = router;
