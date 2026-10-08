import { icone } from "../utils/icones.js"

function navbar(itensMenu) {
  const navbarElement = document.getElementById("navbar")

  function render() {
    const hashAtual = (window.location.hash || itensMenu[0]?.url).split("?")[0]

    navbarElement.innerHTML = `
      <nav class="navbar">
        ${itensMenu
          .filter(menu => menu.label !== "")
          .map(item => {
            const classeAtiva = item.url === hashAtual ? "navbar__item--ativo" : ""
            return `
              <a href="${item.url}" class="navbar__item ${classeAtiva}">
                ${icone(item.icon, 22)}
                <span>${item.label}</span>
              </a>
            `
          })
          .join("")}
      </nav>
    `
  }

  render()
  window.addEventListener("hashchange", render)
}

export { navbar }