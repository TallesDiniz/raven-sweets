const caminhos = {
  casa: `<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>`,
  cupcake: `<path d="M5 12h14l-2 9H7z"/><path d="M6 12a6 6 0 0 1 12 0"/><circle cx="12" cy="4.5" r="1.2"/>`,
  sacola: `<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>`,
  coracao: `<path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z"/>`,
  usuario: `<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>`,
  busca: `<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>`,
  voltar: `<path d="M15 5l-7 7 7 7"/>`,
  check: `<path d="M5 12.5l4.5 4.5L19 7"/>`,
  mais: `<path d="M12 5v14M5 12h14"/>`,
  menos: `<path d="M5 12h14"/>`,

  abobora: `<path d="M12 7c-4 0-8 2.5-8 7s4 6 8 6 8-1.5 8-6-4-7-8-7z"/><path d="M12 7c0-2 .5-3 2-4"/><path d="M12 7c-2 1.5-2.5 5-2.5 7s.5 5.5 2.5 6M12 7c2 1.5 2.5 5 2.5 7s-.5 5.5-2.5 6"/>`,

  bolo: `<rect x="4" y="12" width="16" height="8" rx="1.5"/><path d="M4 15c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M12 12V8"/><path d="M12 4c1 1 1 2 0 3-1-1-1-2 0-3z"/>`,
  cookie: `<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="9" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="14" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="14.5" r="1" fill="currentColor" stroke="none"/>`,
  chocolate: `<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M5 9h14M5 15h14M12 3v18"/>`,
  pocao: `<path d="M9 3h6"/><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3"/><path d="M7.5 15h9"/>`,
  presente: `<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8"/><path d="M12 8v12"/><path d="M12 8c-2 0-4-1-4-2.5S9.5 3 12 8zM12 8c2 0 4-1 4-2.5S14.5 3 12 8z"/>`,
};

function icone(nome, tamanho = 24, preenchido = false) {
  const conteudo = caminhos[nome];
  if (!conteudo) return "";

  return `<svg class="icone" width="${tamanho}" height="${tamanho}" viewBox="0 0 24 24" fill="${preenchido ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${conteudo}</svg>`;
}

export { icone };
