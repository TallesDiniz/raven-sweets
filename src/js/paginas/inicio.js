import listaDeCategorias from "../dadosMockados/categorias.js";
import listaDeProdutos from "../dadosMockados/produtos.js";
import { formatarPreco } from "../utils/formatar.js";
import { tratarImagensQuebradas } from "../utils/imagem.js";
import { botaoFavoritoHTML, ativarFavoritos } from "../utils/favoritar.js"

function inicio(app) {
  const destaques = listaDeProdutos.filter((produto) => produto.destaque);

  app.innerHTML = `
    <div class="topo">
      <span class="topo__marca">🦅 Raven Sweets</span>
    </div>

    <div class="tela">
      <div class="busca">
        <input
          type="text"
          id="input-busca"
          class="campo"
          placeholder="Buscar doces"
          aria-label="Buscar doces"
        >
        <button id="btn-busca" class="botao busca__botao" aria-label="Buscar">→</button>
      </div>

      <section class="banner">
        <span class="selo selo--halloween">Especial de Halloween</span>
        <h2>Doces que encantam a noite mais mágica do ano</h2>
        <p>Tortas, cupcakes e kits temáticos para o seu Halloween.</p>
        <button id="btn-banner" class="botao botao--abobora">Ver cardápio</button>
      </section>

      <section class="secao">
        <h3 class="secao__titulo">Categorias</h3>
        <ul class="categorias">
          ${listaDeCategorias
            .map(
              (categoria) => `
            <li class="categoria" data-categoria="${categoria.id}">
              <span aria-hidden="true">${categoria.icone}</span>
              <span>${categoria.nome}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
      </section>

      <section class="secao">
        <h3 class="secao__titulo">Em destaque</h3>
        <ul class="destaques">
          ${destaques
            .map(
              (produto) => `
            <li class="produto-card" data-id="${produto.id}">
              ${botaoFavoritoHTML(produto.id)}
              <img
                class="produto-card__img"
                src="${produto.img}"
                alt="${produto.nome}"
              >
              <p class="produto-card__nome">${produto.nome}</p>
              <p class="preco">R$ ${formatarPreco(produto.preco)}</p>
            </li>
          `,
            )
            .join("")}
        </ul>
      </section>
    </div>
  `;

  tratarImagensQuebradas(app);
  ativarFavoritos(app)
  adicionarEvento(app);
}

function adicionarEvento(app) {
  const inputBusca = document.getElementById("input-busca");
  const botaoBusca = document.getElementById("btn-busca");
  const botaoBanner = document.getElementById("btn-banner");
  const categorias = app.querySelectorAll(".categoria");
  const cards = app.querySelectorAll(".produto-card");

  function buscar() {
    const texto = inputBusca.value.trim();
    window.location.hash = texto
      ? `#cardapio?busca=${encodeURIComponent(texto)}`
      : "#cardapio";
  }

  botaoBusca.addEventListener("click", buscar);

  inputBusca.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") buscar();
  });

  botaoBanner.addEventListener("click", () => {
    window.location.hash = "#cardapio";
  });

  categorias.forEach((item) =>
    item.addEventListener("click", () => {
      window.location.hash = `#cardapio?categoria=${item.dataset.categoria}`;
    }),
  );

  cards.forEach((card) =>
    card.addEventListener("click", () => {
      window.location.hash = `#detalhe?id=${card.dataset.id}`;
    }),
  );
}

export default {
  url: "#inicio",
  label: "início",
  icon: "home",
  pagina: inicio,
};
