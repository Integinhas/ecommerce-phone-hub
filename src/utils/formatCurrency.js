// Função para formatar um valor como uma string no formato de moeda brasileira
const formatCurrency = (value, currency) => {
  // Utilizando a função toLocaleString para formatar o valor
  // no estilo de moeda brasileira (pt-br) com o código de moeda fornecido
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency,
  });
};

export default formatCurrency;
