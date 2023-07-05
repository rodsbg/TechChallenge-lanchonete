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
 *                default: Cadastrar Acompanhamento
 *              bebida:
 *                type: string
 *                default: Cadastrar Bebida
 *              status:
 *                type: string
 *                default: Status
 *              ondecomer:
 *                type: string
 *                default: Cadastrar se pra viagem ou para comer na lanchonete
 *     responses:
 *       200:
 *         description: Produto Cadastrado
*/ 


router.post('/pedido', pedidoController.criarPedido);

module.exports = router;
