// src/app/repositories/produtoRepository.js
const Produto = require('../../domain/models/Produto');

const criarProduto = async (produtoData) => {
  try {
    //console.log(produtoData, "repository");
    const produto = new Produto(produtoData);
    await produto.save();
    return produto;
  } catch (error) {
    throw new Error('Erro ao cadastrar produto.');
  }
};

const editarProduto = async (produtoData) => {
  try {
  console.log(productData.codigo, "   " ,produtoData, "Repo");
    const produto = await Produto.findOneAndUpdate(productData.codigo, produtoData);

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

const buscarprodutoporcodigo = async (codigo) => {
  try {
    const produtos = await Produto.find({ codigo });
    return produtos;
  } catch (error) {
    throw new Error('Erro ao buscar produtos por codigo.');
  }
};



module.exports = {
  criarProduto,
  editarProduto,
  removerProduto,
  buscarProdutosPorCategoria,
  buscarprodutoporcodigo,
};
