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
 *              - codigo
 *              - nome
 *              - categoria
 *              - descricao
 *              - preco
 *            properties:
 *              codigo:
 *                type: number
 *                default: codigo do produto
 *              nome:
 *                type: string
 *                default: Nome do Produto
 *              categoria:
 *                type: string
 *                default: Categoria do Produto (lanche acompanhamento bebida sobremesa)
 *              descricao:
 *                type: string
 *                default: Descritivo do produto
 *              preco:
 *                type: number
 *                default: Preco do produto
 *     responses:
 *       200:
 *         description: Produto Cadastrado
*/ 
/**
 * @openapi
 * /api/produtos:
 *   put:
 *     summary: Alterar o produto pelo codigo
 *     description: Alterar o produto pelo codigo.
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - codigo
 *              - nome
 *              - categoria
 *              - descricao
 *              - preco
 *            properties:
 *              codigo:
 *                type: number
 *                default: codigo do Produto
 *              nome:
 *                type: string
 *                default: Nome do Produto
 *              categoria:
 *                type: number
 *                default: Categoria do Produto
 *              descricao:
 *                type: string
 *                default: Descricao do Produto
 *              preco:
 *                type: number
 *                default: Preco do Produto
 *     responses:
 *       200:
 *         description: Alterar o produto pelo codigo
 *     
 */

/**
 * @openapi
 * /api/produtos:
 *   delete:
 *     summary: Deletar o produto pelo codigo
 *     description: Deletar o produto pelo codigo
 *     parameters:
 *     - in: path
 *       name: codigo
 *       type: string
 *       required: true
 *       description: codigo do produto
 *     responses:
 *       200:
 *         description: Deletar o produto pelo codigo
 */

/**
 * @openapi
 * /api/produtos/categoria/{categoria}:
 *   get:
 *     summary: Lista produtos pela categoria
 *     description: Necessario inserir a categorias
 *     parameters:
 *     - in: path
 *       name: categoria
 *       type: string
 *       required: true
 *       description: Digitar - lanche ou acompanhamento ou bebida ou sobremesa
 *     responses:
 *       200:
 *         description: Lista produtos pela categoria
 */



router.post('/produtos', ProdutoController.criarProduto);
router.put('/produtos', ProdutoController.editarProduto);
router.delete('/produtos', ProdutoController.removerProduto);
router.get('/produtos/categoria/:categoria', ProdutoController.buscarProdutosPorCategoria);

module.exports = router;
