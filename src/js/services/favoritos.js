const ids = [];

function ehFavorito(id) {
  return ids.includes(id);
}


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