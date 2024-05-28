const mercadopago = require('mercadopago');
const Pagamento = require('../../domain/models/Pagamento');

// Configurar credenciais do Mercado Pago
mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN'
});

// Função para criar pagamento
const criarPagamento = async (dadosPedido) => {
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
    return pagamento;
  } catch (error) {
    throw new Error('Erro ao criar pagamento: ' + error);
  }
};

// Função para listar pagamentos
async function listarPagamentos() {
  return Pagamento.find();
}

module.exports = { listarPagamentos, criarPagamento };

