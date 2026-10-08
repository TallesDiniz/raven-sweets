import listaDeProdutos from "../dadosMockados/produtos.js";
import { formatarPreco } from "../utils/formatar.js";
import { tratarImagensQuebradas } from "../utils/imagem.js";
import { adicionar } from "../services/carrinho.js";
import { botaoFavoritoHTML, ativarFavoritos } from "../utils/favoritar.js";
import {icone} from "../utils/icones.js"

const QUANTIDADE_MAXIMA = 20;

function topo() {
  return `
    <div class="topo">
      <button id="btn-voltar" class="topo__voltar" aria-label="Voltar">${icone("voltar", 26)}</button>
      <span class="topo__titulo">Detalhe do doce</span>
    </div>
  `;
}


function voltar() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.hash = "#cardapio";
  }
}

function detalhe(app, params) {
  const id = Number(params.get("id"));
  const produto = listaDeProdutos.find((item) => item.id === id);

  if (!produto) {
    app.innerHTML = `
      ${topo()}
      <div class="tela">
        <div class="vazio">
          <p>Doce não encontrado.</p>
          <button id="btn-cardapio" class="botao botao--contorno">Ver cardápio</button>
        </div>
      </div>
    `;
    document.getElementById("btn-voltar").addEventListener("click", voltar);
    document.getElementById("btn-cardapio").addEventListener("click", () => {
      window.location.hash = "#cardapio";
    });
    return;
  }

  app.innerHTML = `
    ${topo()}
    <div class="tela">
      <div class="detalhe__imagem">  
        <img class="detalhe__img" src="${produto.img}" alt="${produto.nome}">
        ${botaoFavoritoHTML(produto.id)}
      </div>    

      <div class="detalhe__cabecalho">
        ${produto.halloween ? `<span class="selo selo--halloween">Especial de Halloween</span>` : ""}
        <h2 class="detalhe__nome">${produto.nome}</h2>
        <p class="preco detalhe__preco">R$ ${formatarPreco(produto.preco)}</p>
      </div>

      <p class="detalhe__descricao">${produto.descricao}</p>

      <div class="detalhe__linha">
        <span>Quantidade</span>
        <div class="seletor">
          <button id="btn-menos" class="seletor__btn" aria-label="Diminuir">${icone("menos", 16)}</button>
          <span id="qtd" class="seletor__qtd">1</span>
          <button id="btn-mais" class="seletor__btn" aria-label="Aumentar">${icone("mais", 16)}</button>
        </div>
      </div>

      <button id="btn-adicionar" class="botao botao--abobora"></button>

      <div id="aviso" class="detalhe__aviso" hidden>
        <span>${icone("check", 16)} Adicionado ao carrinho</span>
        <button id="btn-ir-carrinho">Ver carrinho</button>
      </div>
    </div>
  `;

  tratarImagensQuebradas(app);
  ativarFavoritos(app)
  adicionarEvento(produto);
}

function adicionarEvento(produto) {
  let quantidade = 1;

  const textoQtd = document.getElementById("qtd");
  const botaoAdicionar = document.getElementById("btn-adicionar");
  const aviso = document.getElementById("aviso");

  function atualizar() {
    textoQtd.textContent = quantidade;
    botaoAdicionar.textContent = `Adicionar · R$ ${formatarPreco(produto.preco * quantidade)}`;
  }

  document.getElementById("btn-voltar").addEventListener("click", voltar);

  document.getElementById("btn-menos").addEventListener("click", () => {
    if (quantidade > 1) quantidade--;
    atualizar();
  });

  document.getElementById("btn-mais").addEventListener("click", () => {
    if (quantidade < QUANTIDADE_MAXIMA) quantidade++;
    atualizar();
  });

  botaoAdicionar.addEventListener("click", () => {
    adicionar(produto, quantidade);
    aviso.hidden = false;
  });

  document.getElementById("btn-ir-carrinho").addEventListener("click", () => {
    window.location.hash = "#carrinho";
  });

  atualizar();
}

export default { url: "#detalhe", label: "", icon: "cookie", pagina: detalhe };
