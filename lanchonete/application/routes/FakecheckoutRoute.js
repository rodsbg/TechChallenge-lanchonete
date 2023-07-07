const express = require('express');
const pagamentoController = require('../../interfaces/controllers/PagamentoController');
const router = express.Router();

/**
 * @openapi
 * /api/pedido:
 *   get:
 *     summary: Consulta Pagamento (FakeCheckout)
 *     description: Consulta Pagamento (FakeCheckout)
 *     responses:
 *       200:
 *         description: Listagem ok
*/ 

router.get('/consultapagamentos', pagamentoController.listarPagamentos);

module.exports = router;
