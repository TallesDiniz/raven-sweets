import { ehFavorito, alternar } from "../services/favoritos.js"
import { icone } from "./icones.js"

function botaoFavoritoHTML(id) {
  const ativo = ehFavorito(id)
  return `
    <button
      class="favorito-btn ${ativo ? "favorito-btn--ativo" : ""}"
      data-favorito="${id}"
      aria-label="Favoritar"
      aria-pressed="${ativo}"
    >${icone("coracao", "1em", ativo)}</button>
  `
}

function ativarFavoritos(container, aoMudar) {
  container.querySelectorAll("[data-favorito]").forEach(botao => {
    botao.addEventListener("click", (evento) => {
      evento.stopPropagation() // não abre o detalhe ao favoritar

      const ativo = alternar(Number(botao.dataset.favorito))
      botao.classList.toggle("favorito-btn--ativo", ativo)
      botao.innerHTML = icone("coracao", "1em", ativo)
      botao.setAttribute("aria-pressed", ativo)

      if (aoMudar) aoMudar()
    })
  })
}

export { botaoFavoritoHTML, ativarFavoritos }