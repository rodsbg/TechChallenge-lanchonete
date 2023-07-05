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
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - nome
 *              - categoria
 *            properties:
 *              nome:
 *                type: string
 *                default: Nome do Produto
 *              categoria:
 *                type: array
 *                default: Categoria do Produto
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
 *     parameters:
 *     - in: path
 *       name: id
 *       type: string
 *       required: true
 *       description: categoria 
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - nome
 *              - categoria
 *            properties:
 *              nome:
 *                type: string
 *                default: Nome do Produto
 *              categoria:
 *                type: array
 *                default: Categoria do Produto
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
 *     parameters:
 *     - in: path
 *       name: id
 *       type: string
 *       required: true
 *       description: categoria 
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
