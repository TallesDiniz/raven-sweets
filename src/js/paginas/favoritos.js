import listaDeProdutos from "../dadosMockados/produtos.js";
import { listarIds } from "../services/favoritos.js";
import { botaoFavoritoHTML, ativarFavoritos } from "../utils/favoritar.js";
import { formatarPreco } from "../utils/formatar.js";
import { tratarImagensQuebradas } from "../utils/imagem.js";

function favoritos(app) {
  const lista = listarIds()
    .map((id) => listaDeProdutos.find((produto) => produto.id === id))
    .filter(Boolean);

  app.innerHTML = `
    <div class="topo">
      <span class="topo__titulo">Favoritos</span>
    </div>

    <div class="tela">
      ${
        lista.length === 0
          ? `
        <div class="vazio">
          <p>Você ainda não favoritou nenhum doce.</p>
          <button id="btn-cardapio" class="botao botao--contorno">Ver cardápio</button>
        </div>
      `
          : `
        <ul class="lista-produtos">
          ${lista
            .map(
              (produto) => `
            <li class="item-lista" data-id="${produto.id}">
              ${botaoFavoritoHTML(produto.id)}
              <img class="item-lista__img" src="${produto.img}" alt="${produto.nome}">
              <div class="item-lista__info">
                <p class="item-lista__nome">${produto.nome}</p>
                <p class="item-lista__descricao">${produto.descricao}</p>
                <div class="item-lista__rodape">
                  <span class="preco">R$ ${formatarPreco(produto.preco)}</span>
                  ${produto.halloween ? `<span class="selo selo--halloween">Halloween</span>` : ""}
                </div>
              </div>
            </li>
          `,
            )
            .join("")}
        </ul>
      `
      }
    </div>
  `;

  tratarImagensQuebradas(app);

  ativarFavoritos(app, () => favoritos(app));

  app.querySelectorAll(".item-lista").forEach((item) => {
    item.addEventListener("click", () => {
      window.location.hash = `#detalhe?id=${item.dataset.id}`;
    });
  });

  const botaoCardapio = document.getElementById("btn-cardapio");
  if (botaoCardapio) {
    botaoCardapio.addEventListener("click", () => {
      window.location.hash = "#cardapio";
    });
  }
}

export default {
  url: "#favoritos",
  label: "favoritos",
  icon: "coracao",
  pagina: favoritos,
};
