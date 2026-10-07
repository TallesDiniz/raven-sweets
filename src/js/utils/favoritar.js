import { ehFavorito, alternar } from "../services/favoritos.js";

// HTML do botão ♡/♥ para colocar dentro de qualquer card
function botaoFavoritoHTML(id) {
  const ativo = ehFavorito(id);
  return `
    <button
      class="favorito-btn ${ativo ? "favorito-btn--ativo" : ""}"
      data-favorito="${id}"
      aria-label="Favoritar"
      aria-pressed="${ativo}"
    >${ativo ? "♥" : "♡"}</button>
  `;
}

// Liga os cliques dos botões ♡ dentro de um container.
// aoMudar (opcional) roda depois de cada alteração.
function ativarFavoritos(container, aoMudar) {
  container.querySelectorAll("[data-favorito]").forEach((botao) => {
    botao.addEventListener("click", (evento) => {
      evento.stopPropagation(); // não abre o detalhe ao favoritar

      const ativo = alternar(Number(botao.dataset.favorito));
      botao.classList.toggle("favorito-btn--ativo", ativo);
      botao.textContent = ativo ? "♥" : "♡";
      botao.setAttribute("aria-pressed", ativo);

      if (aoMudar) aoMudar();
    });
  });
}

export { botaoFavoritoHTML, ativarFavoritos };
