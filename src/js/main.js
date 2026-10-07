import { mapaderotas } from "./rotas/rotas.js";
import { navbar } from "./navbar/navbar.js";

const app = document.getElementById("app");
navbar(mapaderotas);

function renderizarPagina() {
  const hash = window.location.hash || mapaderotas[0].url;
  const [caminho, query] = hash.split("?");
  const params = new URLSearchParams(query);

  const rota = mapaderotas.find((tela) => tela.url === caminho);
  if (rota) {
    rota.pagina(app, params);
    window.scrollTo(0, 0);
  }
}

window.addEventListener("hashchange", renderizarPagina);
renderizarPagina();
