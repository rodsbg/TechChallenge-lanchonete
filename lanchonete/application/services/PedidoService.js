const pedidoRepository = require('../../interfaces/repositories/PedidoRepository');
const clienteRepository = require('../../interfaces/repositories/ClienteRepository');
const produtoRepository = require('../../interfaces/repositories/ProdutoRepository');
const pagamentoRepository = require('../../interfaces/repositories/PagamentoRepository');

async function cadastrarPedido(pedidoData) {
  //Não é necessário validar cpf para cadastrar o pedido
  //verificando se existe o lanche, acompanhamento e a bebida
  //busca cpf do cliente
  const { cpf } = pedidoData;
  const clienteExistente = await clienteRepository.buscarClientePorCpf(cpf);
  if (!clienteExistente) {
    throw new Error('CPF não cadastrado.');
  }
  //busca preco dos produtos
  var { lanche } = pedidoData;

  const produtolanche = await produtoRepository.buscarprodutoporcodigo(lanche);
  var  precolanche = produtolanche[0].preco;
  const  { acompanhamento } = pedidoData;

  const produtoacompanhamento = await produtoRepository.buscarprodutoporcodigo(acompanhamento);
  var  precoacompanhamento = produtoacompanhamento[0].preco;
  const { bebida } = pedidoData;
  const produtobebida= await produtoRepository.buscarprodutoporcodigo(bebida);
  var  precobebida = produtobebida[0].preco;
  const precototal = precolanche + precoacompanhamento + precobebida;
  //console.log(precototal) - calcula o do pedido
  pedidoData.preco = precototal;
  //console.log(pedidoData);

    const pedido = await pedidoRepository.criarPedido(pedidoData);


    return (pedido);
  // realiza o pagamento (fake checkout) e muda o status do pedido
  //const pagamento = await pagamentoRepository.criarPagamento(pedidoData);
  //// muda status do pedido para Enviado para a cozinha
  //const mudarstatus = await pedidoRepository.editarStatusPedido();
  //return (pedido, pagamento, mudarstatus) ;
}
async function listarPedidos() {
  
  return pedidoRepository.listarPedidos();
}


const buscarpedidosporcpfPedidos = async (cpf) => {
    try {
        console.log("Pedido service: buscarpedidosporcpfPedidos");
      return await pedidoRepository.buscarpedidosporcpfPedidos(cpf);
  } catch (error) {
    throw new Error('Nenhum pedido cadastrado para o cliente');
  }
};

module.exports = { cadastrarPedido, listarPedidos, buscarpedidosporcpfPedidos }