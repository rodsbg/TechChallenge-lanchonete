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
 *            cpf:
 *                type: string
 *                default: CPF do cliente
 *            lanche:
 *                type: string
 *                default: Cadastrar Lanche
 *             acompanhamento:
 *                type: string
 *                default: Cadastrar Lanche
 *             bebida:
 *                type: string
 *                default: Cadastrar Lanche
 *             status:
 *                type: string
 *                default: Cadastrar Lanche
 *             ondecomer:
 *                type: string
 *                default: Cadastrar Lanche
 *     responses:
 *       200:
 *         description: Cliente ativo
*/ 


router.post('/pedido', pedidoController.criarCampanha);

module.exports = router;
