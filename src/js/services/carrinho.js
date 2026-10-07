// Array simples em memória: some ao recarregar o app (sem persistência)
const itens = []; // { produto, quantidade }

function adicionar(produto, quantidade = 1) {
  const existente = itens.find((item) => item.produto.id === produto.id);
  if (existente) {
    existente.quantidade += quantidade;
  } else {
    itens.push({ produto, quantidade });
  }
}

function remover(id) {
  const posicao = itens.findIndex((item) => item.produto.id === id);
  if (posicao !== -1) itens.splice(posicao, 1);
}

function alterarQuantidade(id, delta) {
  const item = itens.find((item) => item.produto.id === id);
  if (!item) return;
  item.quantidade += delta;
  if (item.quantidade <= 0) remover(id);
}

function listar() {
  return [...itens];
}

function total() {
  return itens.reduce(
    (soma, item) => soma + item.produto.preco * item.quantidade,
    0,
  );
}

function limpar() {
  itens.length = 0;
}

export { adicionar, remover, alterarQuantidade, listar, total, limpar };
