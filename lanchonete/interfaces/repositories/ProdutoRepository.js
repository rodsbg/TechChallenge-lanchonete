// src/app/repositories/produtoRepository.js
const Produto = require('../../domain/models/Produtos');

const criarProduto = async (produtoData) => {
  try {
    const produto = new Produto(produtoData);
    await produto.save();
    return produto;
  } catch (error) {
    throw new Error('Erro ao criar o produto.');
  }
};

const editarProduto = async (produtoId, produtoData) => {
  try {
    const produto = await Produto.findByIdAndUpdate(produtoId, produtoData, {
      new: true,
    });
    return produto;
  } catch (error) {
    throw new Error('Erro ao editar o produto.');
  }
};

const removerProduto = async (produtoId) => {
  try {
    await Produto.findByIdAndRemove(produtoId);
  } catch (error) {
    throw new Error('Erro ao remover o produto.');
  }
};

const buscarProdutosPorCategoria = async (categoria) => {
  try {
    const produtos = await Produto.find({ categoria });
    return produtos;
  } catch (error) {
    throw new Error('Erro ao buscar produtos por categoria.');
  }
};

module.exports = {
  criarProduto,
  editarProduto,
  removerProduto,
  buscarProdutosPorCategoria,
};
