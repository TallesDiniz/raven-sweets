import listaDeProdutos from "../dadosMockados/produtos.js";
import listaDeCategorias from "../dadosMockados/categorias.js";
import { formatarPreco } from "../utils/formatar.js";
import { tratarImagensQuebradas } from "../utils/imagem.js";
import { botaoFavoritoHTML, ativarFavoritos } from "../utils/favoritar.js"

// Remove acentos e maiúsculas para a busca ("abobora" encontra "Abóbora")
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtrarLista(lista, categoria, busca) {
  const termo = normalizar(busca);

  return lista.filter((produto) => {
    const daCategoria = !categoria || produto.categoria === categoria;
    const daBusca =
      !termo ||
      normalizar(`${produto.nome} ${produto.descricao}`).includes(termo);
    return daCategoria && daBusca;
  });
}

function ordenarLista(lista, ordem) {
  const copia = [...lista];
  if (ordem === "nome") {
    copia.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  } else {
    copia.sort((a, b) => a.preco - b.preco);
  }
  return copia;
}

// Monta a URL a partir dos filtros: mudar o hash re-renderiza a tela
function irPara(categoria, busca, ordem) {
  const params = new URLSearchParams();
  if (categoria) params.set("categoria", categoria);
  if (busca) params.set("busca", busca);
  if (ordem !== "preco") params.set("ordem", ordem);

  const query = params.toString();
  window.location.hash = query ? `#cardapio?${query}` : "#cardapio";
}

function cardapio(app, params) {
  const categoria = params.get("categoria") || "";
  const busca = params.get("busca") || "";
  const ordem = params.get("ordem") || "preco";

  const lista = ordenarLista(
    filtrarLista(listaDeProdutos, categoria, busca),
    ordem,
  );

  app.innerHTML = `
    <div class="topo">
      <button id="btn-voltar" class="topo__voltar" aria-label="Voltar">‹</button>
      <span class="topo__titulo">Cardápio</span>
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

      <div class="pilulas">
        <button class="pilula ${categoria === "" ? "pilula--ativa" : ""}" data-categoria="">
          Todos
        </button>
        ${listaDeCategorias
          .map(
            (item) => `
          <button class="pilula ${categoria === item.id ? "pilula--ativa" : ""}" data-categoria="${item.id}">
            ${item.nome}
          </button>
        `,
          )
          .join("")}
      </div>

      <div class="resultado">
        <p class="resultado__total">${lista.length} ${lista.length === 1 ? "doce" : "doces"}</p>
        <div class="ordenacao">
          <button class="pilula ${ordem === "preco" ? "pilula--ativa" : ""}" data-ordem="preco">Preço</button>
          <button class="pilula ${ordem === "nome" ? "pilula--ativa" : ""}" data-ordem="nome">Nome</button>
        </div>
      </div>

      ${
        lista.length === 0
          ? `
        <div class="vazio">
          <p>Nenhum doce encontrado.</p>
          <button id="btn-limpar" class="botao botao--contorno">Limpar filtros</button>
        </div>
      `
          : `
        <ul class="lista-produtos">
          ${lista
            .map(
              (produto) => `
            <li class="item-lista" data-id="${produto.id}">
              ${botaoFavoritoHTML(produto.id)}
              <img
                class="item-lista__img"
                src="${produto.img}"
                alt="${produto.nome}"
              >
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
  ativarFavoritos(app)
  adicionarEvento(app, { categoria, busca, ordem });
}

function adicionarEvento(app, { categoria, busca, ordem }) {
  const inputBusca = document.getElementById("input-busca");
  const botaoBusca = document.getElementById("btn-busca");
  const botaoVoltar = document.getElementById("btn-voltar");
  const botaoLimpar = document.getElementById("btn-limpar");

  // O valor é colocado via JS (e não no HTML) para evitar problemas com aspas
  inputBusca.value = busca;

  botaoVoltar.addEventListener("click", () => {
    window.location.hash = "#inicio";
  });

  function buscar() {
    irPara(categoria, inputBusca.value.trim(), ordem);
  }

  botaoBusca.addEventListener("click", buscar);
  inputBusca.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") buscar();
  });

  app.querySelectorAll("[data-categoria]").forEach((pilula) => {
    pilula.addEventListener("click", () => {
      irPara(pilula.dataset.categoria, busca, ordem);
    });
  });

  app.querySelectorAll("[data-ordem]").forEach((pilula) => {
    pilula.addEventListener("click", () => {
      irPara(categoria, busca, pilula.dataset.ordem);
    });
  });

  app.querySelectorAll(".item-lista").forEach((item) => {
    item.addEventListener("click", () => {
      window.location.hash = `#detalhe?id=${item.dataset.id}`;
    });
  });

  if (botaoLimpar) {
    botaoLimpar.addEventListener("click", () => {
      window.location.hash = "#cardapio";
    });
  }
}

export default {
  url: "#cardapio",
  label: "cardápio",
  icon: "cookie",
  pagina: cardapio,
};
