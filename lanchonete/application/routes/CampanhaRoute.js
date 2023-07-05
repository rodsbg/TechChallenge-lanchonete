const express = require('express');
const campanhaService = require('../../application/services/ClienteService');
const router = express.Router();



/**
 * @openapi
 * /api/campanha/{cpf}:
 *   put:
 *     summary: Incluir campanha ao cpf indicado
 *     description: Incluir campanha ao cpf indicado
 *     parameters:
 *     - in: path
 *       name: cpf
 *       type: integer
 *       required: true
 *       description: CPF
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - campanha
 *            properties:
 *              campanha:
 *                type: string
 *                default: Campanha para o cliente
 * 
 *     responses:
 *       200:
 *         description: Cliente ativo
*/ 

/**
 * @openapi
 * /api/campanhas:
 *   get:
 *     summary: lista todas as campanhas
 *     description: lista todas as campanhas
 *     responses:
 *       200:
 *         description: Listagem ok
*/ 
router.put('/campanha/:cpf', async (req, res) => {
  try {
    const { cpf } = req.params;
    const cliente = await campanhaService.buscarClientePorCpf(cpf);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar cpf.' });
  }
});

router.get('/campanha', async (req, res) => {
    try {
      const campanha = await campanhaService.listarCampanhas();
      console.log()
      res.json(campanha);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar campanhas.' });
    }
  });

module.exports = router;
