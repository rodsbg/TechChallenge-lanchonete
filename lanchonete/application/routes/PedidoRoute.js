const express = require('express');
const pedidoController = require('../../interfaces/controllers/PedidoController');
const router = express.Router();

/**
 * @openapi
 * /api/pedido:
 *   post:
 *     summary: Cadastrar pedido ao cpf indicado
 *     description: Incluir pedido ao cpf indicado
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - cpf
 *              - lanche
 *              - acompanhamento
 *              - bebida
 *              - status
 *              - ondecomer
 *            properties:
 *              cpf:
 *                type: string
 *                default: CPF do cliente
 *              lanche:
 *                type: array
 *                default: Incluir Lache
 *              acompanhamento:
 *                type: string
 *                default: Incluir Acompanhamento
 *              bebida:
 *                type: string
 *                default: Incluir Bebida
 *              status:
 *                type: string
 *                default: Status do pedido
 *              ondecomer:
 *                type: string
 *                default: Viagem ou comer na lanchonete
 *     responses:
 *       200:
 *         description: Produto Cadastrado
*/ 

/**
 * @openapi
 * /api/pedido:
 *   get:
 *     summary: lista todos os pedidos
 *     description: lista todos os pedidos
 *     responses:
 *       200:
 *         description: Listagem ok
*/ 
router.post('/pedido', pedidoController.criarPedido);
router.get('/pedido', pedidoController.listarPedidos);

module.exports = router;
