// src/app/services/produtoService.js
const produtoRepository = require('../../interfaces/repositories/ProdutoRepository');

const criarProduto = async (produtoData) => {
  try {

    return await produtoRepository.criarProduto(produtoData);

  } catch (error) {
    throw new Error('Erro ao cadastrar o produto.');
  }
};

const editarProduto = async (produtoId, produtoData) => {
  try {
    return await produtoRepository.editarProduto(produtoId, produtoData);
  } catch (error) {
    throw new Error('Erro ao editar o produto.');
  }
};

const removerProduto = async (produtoId) => {
  try {
    await produtoRepository.removerProduto(produtoId);
  } catch (error) {
    throw new Error('Erro ao remover o produto.');
  }
};

const buscarProdutosPorCategoria = async (categoria) => {
  try {
    return await produtoRepository.buscarProdutosPorCategoria(categoria);
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
