
function tratarImagensQuebradas(container) {
  container.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      () => {
        const aviso = document.createElement("div");
        aviso.className = "img-placeholder";
        aviso.textContent = img.alt;
        img.replaceWith(aviso);
      },
      { once: true },
    );
  });
}

export { tratarImagensQuebradas };
