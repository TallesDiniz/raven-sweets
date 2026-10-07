// Array simples em memória: some ao recarregar o app (sem persistência)
const ids = [];

function ehFavorito(id) {
  return ids.includes(id);
}

// Liga/desliga o favorito e devolve o novo estado (true = favoritado)
function alternar(id) {
  const posicao = ids.indexOf(id);
  if (posicao === -1) {
    ids.push(id);
    return true;
  }
  ids.splice(posicao, 1);
  return false;
}

function listarIds() {
  return [...ids];
}

export { ehFavorito, alternar, listarIds };