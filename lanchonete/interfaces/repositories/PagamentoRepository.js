const mercadopago = require('mercadopago');
const Pedido = require('../../domain/models/Pedido');
const Pagamento = require('../../domain/models/Pagamento');

// Configurar credenciais do Mercado Pago
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN
});

// Função para criar pagamentoi

const criarPagamento = async (PedidoData) => {
  try {
    const pagamento = new Pedido(PedidoData);
    await pagamento.save();
    return pagamento;
  } catch (error) {
    throw new Error('Erro ao criar pagamento.' + error);
  }
};

const criarPagamento_mercadopago = async (dadosPedido) => {
  try {
    // Criar preferência de pagamento no Mercado Pago
    const preferencia = {
      items: [
        {
          title: 'Produto',
          quantity: 1,
          currency_id: 'BRL', // Moeda utilizada (Real Brasileiro)
          unit_price: dadosPedido.monto // Utiliza o montante do pedido
        }
      ]
    };

    const resposta = await mercadopago.preferences.create(preferencia);
    const idPreferencia = resposta.body.id;

    // Criar o pagamento no banco de dados
    const pagamento = new Pagamento({
      // Outros campos dos dados do pedido
      idPreferencia: idPreferencia // Guarda o ID da preferência de pagamento do Mercado Pago
    });

    await pagamento.save();
    // Muda Status do pedido para Em Preparação
    const pedido = await Produto.findOneAndUpdate({ cpf }, { status: 'Em Preparação' }, { new: true });

    return pagamento;
  } catch (error) {
    throw new Error('Erro ao criar pagamento: ' + error);
  }
};


sync function gerarQRCode(idPreferencia) {
  try {
    // Obter a preferência de pagamento
    const preference = await mercadopago.preferences.findById(idPreferencia);

    // Extrair a URL do QR Code da preferência de pagamento
    const qrCodeURL = preference.response.init_point;

    return qrCodeURL;
  } catch (error) {
    console.error('Erro ao gerar QR Code:', error);
    throw new Error('Erro ao gerar QR Code do Mercado Pago');
  }
}


// Função para listar pagamentos
async function listarPagamentos() {
  return Pagamento.find();
}

module.exports = { listarPagamentos, criarPagamento };

