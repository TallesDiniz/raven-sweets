import {
  listar,
  total,
  alterarQuantidade,
  remover,
  limpar,
} from "../services/carrinho.js";
import { formatarPreco } from "../utils/formatar.js";
import { tratarImagensQuebradas } from "../utils/imagem.js";

function carrinho(app) {
  renderizar(app, false);
}

function renderizar(app, pedidoFeito) {
  const itens = listar();

  let conteudo;

  if (pedidoFeito) {
    conteudo = `
      <div class="confirmacao">
        <span class="confirmacao__icone">🎃</span>
        <h2>Pedido realizado!</h2>
        <p>Seus doces já estão sendo preparados.</p>
        <button id="btn-inicio" class="botao">Voltar ao início</button>
      </div>
    `;
  } else if (itens.length === 0) {
    conteudo = `
      <div class="vazio">
        <p>Seu carrinho está vazio.</p>
        <button id="btn-cardapio" class="botao botao--contorno">Ver cardápio</button>
      </div>
    `;
  } else {
    conteudo = `
      <ul class="itens-carrinho">
        ${itens
          .map(
            ({ produto, quantidade }) => `
          <li class="item-lista item-lista--estatico">
            <img class="item-lista__img" src="${produto.img}" alt="${produto.nome}">
            <div class="item-lista__info">
              <p class="item-lista__nome">${produto.nome}</p>
              <p class="preco">R$ ${formatarPreco(produto.preco)}</p>
              <div class="item-lista__rodape">
                <div class="seletor">
                  <button class="seletor__btn" data-acao="menos" data-id="${produto.id}" aria-label="Diminuir">−</button>
                  <span class="seletor__qtd">${quantidade}</span>
                  <button class="seletor__btn" data-acao="mais" data-id="${produto.id}" aria-label="Aumentar">+</button>
                </div>
                <button class="item-carrinho__remover" data-acao="remover" data-id="${produto.id}">Remover</button>
              </div>
            </div>
          </li>
        `,
          )
          .join("")}
      </ul>

      <div class="resumo">
        <div class="resumo__linha resumo__linha--total">
          <span>Total</span>
          <span>R$ ${formatarPreco(total())}</span>
        </div>
        <button id="btn-finalizar" class="botao botao--abobora">Finalizar pedido</button>
      </div>
    `;
  }

  app.innerHTML = `
    <div class="topo">
      <span class="topo__titulo">Carrinho</span>
    </div>
    <div class="tela">
      ${conteudo}
    </div>
  `;

  tratarImagensQuebradas(app);
  adicionarEvento(app);
}

function adicionarEvento(app) {
  app.querySelectorAll("[data-acao]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const id = Number(botao.dataset.id);
      const acao = botao.dataset.acao;

      if (acao === "mais") alterarQuantidade(id, 1);
      if (acao === "menos") alterarQuantidade(id, -1);
      if (acao === "remover") remover(id);

      renderizar(app, false);
    });
  });

  const botaoFinalizar = document.getElementById("btn-finalizar");
  const botaoCardapio = document.getElementById("btn-cardapio");
  const botaoInicio = document.getElementById("btn-inicio");

  if (botaoFinalizar) {
    botaoFinalizar.addEventListener("click", () => {
      limpar();
      renderizar(app, true);
    });
  }

  if (botaoCardapio) {
    botaoCardapio.addEventListener("click", () => {
      window.location.hash = "#cardapio";
    });
  }

  if (botaoInicio) {
    botaoInicio.addEventListener("click", () => {
      window.location.hash = "#inicio";
    });
  }
}

export default {
  url: "#carrinho",
  label: "carrinho",
  icon: "shopping-basket",
  pagina: carrinho,
};
