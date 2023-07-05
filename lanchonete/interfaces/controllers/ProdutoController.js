// src/app/controllers/produtoController.js
const produtoService = require('../../application/services/ProdutoService');

const criarProduto = async (req, res) => {
  try {
    const produto = await produtoService.criarProduto(req.body);
    console.log(req.body);
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editarProduto = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await produtoService.editarProduto(id, req.body);
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const removerProduto = async (req, res) => {
  try {
    const { id } = req.params;
    await produtoService.removerProduto(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const buscarProdutosPorCategoria = async (req, res) => {
  try {
    const { categoria } = req.params;
    const produtos = await produtoService.buscarProdutosPorCategoria(categoria);
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  criarProduto,
  editarProduto,
  removerProduto,
  buscarProdutosPorCategoria,
};
