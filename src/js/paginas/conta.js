import usuario from "../dadosMockados/usuario.js";
import listaDePedidos from "../dadosMockados/pedidos.js";
import { formatarPreco } from "../utils/formatar.js";

function totalDoPedido(pedido) {
  return pedido.itens.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0,
  );
}

function conta(app) {
  app.innerHTML = `
    <div class="topo">
      <span class="topo__titulo">Minha conta</span>
    </div>

    <div class="tela">
      <section class="card">
        <div class="perfil">
          <div class="perfil__avatar">${usuario.nome.charAt(0)}</div>
          <div>
            <h2 class="perfil__nome">${usuario.nome}</h2>
            <p class="perfil__email">${usuario.email}</p>
          </div>
        </div>

        <div class="dados">
          <div class="dados__linha">
            <span class="dados__rotulo">Telefone</span>
            <span class="dados__valor">${usuario.telefone}</span>
          </div>
          <div class="dados__linha">
            <span class="dados__rotulo">Endereço de entrega</span>
            <span class="dados__valor">${usuario.endereco}</span>
          </div>
          <div class="dados__linha">
            <span class="dados__rotulo">Cliente desde</span>
            <span class="dados__valor">${usuario.membroDesde}</span>
          </div>
        </div>
      </section>

      <section class="secao">
        <h3 class="secao__titulo">Meus pedidos</h3>

        ${listaDePedidos
          .map(
            (pedido) => `
          <article class="card">
            <div class="pedido__cabecalho">
              <div>
                <p class="pedido__numero">Pedido #${pedido.numero}</p>
                <p class="pedido__data">${pedido.data}</p>
              </div>
              <span class="selo ${pedido.status === "em preparo" ? "selo--halloween" : ""}">
                ${pedido.status}
              </span>
            </div>

            <ul class="pedido__itens">
              ${pedido.itens
                .map(
                  (item) => `
                <li>${item.quantidade}× ${item.nome}</li>
              `,
                )
                .join("")}
            </ul>

            <div class="pedido__total">
              <span>Total</span>
              <span>R$ ${formatarPreco(totalDoPedido(pedido))}</span>
            </div>
          </article>
        `,
          )
          .join("")}
      </section>
    </div>
  `;
}

export default { url: "#conta", label: "conta", icon: "user", pagina: conta };
