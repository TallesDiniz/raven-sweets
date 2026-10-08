# 🦅 Raven Sweets

Demonstração mobile de uma **doceria online** para a matéria de dispositivos móveis da Fatec MC com tema de Harry Potter e Halloween, inspirada nas cores da casa Corvinal (azul, bronze e um toque de abóbora). O app é uma SPA feita só com **HTML, CSS e JavaScript puros**, pensada para celular e executada na web.



---

## Sumário

- [Visão geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Telas](#telas)
- [Funcionalidades](#funcionalidades)
- [Como rodar](#como-rodar)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquitetura](#arquitetura)
- [Dados mockados](#dados-mockados)
- [Imagens e ícones](#imagens-e-ícones)
- [Design](#design)
- [Capacitor](#capacitor)
- [Como evoluir o projeto](#como-evoluir-o-projeto)
- [Limitações](#limitações)
- [Autor](#autor)

---

## Visão geral

O Raven Sweets simula a jornada de compra de uma loja de doces: o cliente busca e filtra doces, vê os detalhes, favorita, monta o carrinho, finaliza o pedido e consulta sua conta.

Restrições assumidas no projeto:

- **Sem frameworks** de CSS ou JavaScript (nada de Tailwind, Bootstrap, React etc.)
- **Sem `display: grid`**: todo o layout usa **flexbox**
- **Sem backend**: todos os dados são mockados e ficam em uma pasta própria
- **Sem persistência**: carrinho e favoritos vivem apenas em memória
- **6 telas** adaptadas para dispositivos móveis

A arquitetura segue os padrões do projeto de referência [`atividade-kioferta`](https://github.com/TallesDiniz/atividade-kioferta) (roteamento por hash e telas montadas por template string), reescritos com CSS e JS vanilla.

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura (`index.html` único) |
| CSS3 vanilla | Estilos com variáveis CSS, flexbox e media features simples |
| JavaScript (ES Modules) | Telas, rotas, navbar, carrinho e favoritos |
| [Vite](https://vite.dev) | Servidor de desenvolvimento e build (ferramenta, não framework) |
| [Capacitor](https://capacitorjs.com) | Instalado e configurado; o projeto roda como demonstração na web |

## Telas

| # | Tela | Rota | Na navbar |
|---|------|------|:---:|
| 1 | Início (busca, banner, categorias e destaques) | `#inicio` | ✅ |
| 2 | Cardápio (lista com filtros e ordenação) | `#cardapio` | ✅ |
| 3 | Detalhe do doce | `#detalhe?id=3` | ❌ (sub-tela) |
| 4 | Carrinho | `#carrinho` | ✅ |
| 5 | Favoritos | `#favoritos` | ✅ |
| 6 | Conta (perfil e pedidos) | `#conta` | ✅ |

O Cardápio aceita parâmetros na URL:

```
#cardapio?categoria=cupcakes
#cardapio?busca=abobora
#cardapio?categoria=tortas&busca=abobora&ordem=nome
```

## Funcionalidades

- **Busca por texto** que ignora acentos e maiúsculas (`abobora` encontra "Abóbora")
- **Filtro por categoria** e **ordenação** por preço ou nome
- **Detalhe do doce** com seletor de quantidade e total atualizado no botão
- **Carrinho** com aumentar, diminuir e remover itens, total e finalização de pedido fictício
- **Favoritos** com botão de coração em cards, lista e detalhe; desfavoritar remove o doce da tela de Favoritos na hora
- **Conta** com dados do usuário e histórico de pedidos mockados
- **Fallback de imagem:** se uma foto não carregar, aparece um quadrado com o nome do doce
- **Navbar inferior** com ícones e destaque da aba ativa
- Layout centralizado em coluna de celular também no computador

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org) 20 ou superior (versão LTS)
- npm (já vem com o Node.js)

### Instalação

```bash
git clone <url-do-repositorio>
cd raven-sweets
npm install
```

### Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run build` | Gera a versão final na pasta `dist/` |
| `npm run preview` | Serve a versão de `dist/` para conferir antes de publicar |

### Testando como celular

**No computador:** abra o endereço do `npm run dev`, aperte `F12` e ative o modo dispositivo (ícone de celular) do navegador.

**No celular real**, com o aparelho na mesma rede Wi-Fi:

```bash
npm run dev -- --host
```

Abra no celular o endereço da linha **Network** mostrada no terminal (algo como `http://192.168.0.15:5173`).

Se a conexão em tempo real do servidor de desenvolvimento cair e a página recarregar sozinha (o que zera o carrinho e os favoritos), teste a versão de produção:

```bash
npm run build
npm run preview -- --host
```

## Estrutura do projeto

```
raven-sweets/
├── capacitor.config.json
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
└── src/
    ├── index.html
    ├── css/
    │   ├── style.css            # só @imports
    │   ├── variables.css        # cores, fontes, espaçamentos
    │   ├── base.css             # reset, topo, cards, botões, campos
    │   ├── navbar.css
    │   ├── components.css      # busca, cards, seletor, favorito, ícones
    │   └── paginas/
    │       ├── inicio.css
    │       ├── cardapio.css
    │       ├── detalhe.css
    │       ├── carrinho.css
    │       └── conta.css
    ├── js/
    │   ├── main.js              # inicia o app e renderiza a rota atual
    │   ├── rotas/
    │   │   └── rotas.js         # lista de telas
    │   ├── navbar/
    │   │   └── navbar.js
    │   ├── paginas/
    │   │   ├── inicio.js
    │   │   ├── cardapio.js
    │   │   ├── detalhe.js
    │   │   ├── carrinho.js
    │   │   ├── favoritos.js
    │   │   └── conta.js
    │   ├── services/
    │   │   ├── carrinho.js      # carrinho em memória
    │   │   └── favoritos.js     # favoritos em memória
    │   ├── utils/
    │   │   ├── formatar.js      # formatação de preço
    │   │   ├── imagem.js        # fallback de imagem quebrada
    │   │   ├── icones.js        # ícones SVG inline
    │   │   └── favoritar.js     # botão de coração reutilizável
    │   └── dadosMockados/
    │       ├── produtos.js
    │       ├── categorias.js
    │       ├── usuario.js
    │       └── pedidos.js
    └── public/                  # copiado como está para o dist/
        └── images/
            ├── logo.png
            └── produtos/        # fotos dos doces
```

## Arquitetura

### Roteamento por hash

O app é uma SPA com um único `index.html`. O `main.js` lê `window.location.hash`, separa o caminho dos parâmetros, encontra a tela correspondente e a renderiza:

```js
const [caminho, query] = hash.split("?")
const params = new URLSearchParams(query)
const rota = mapaderotas.find(tela => tela.url === caminho)
rota.pagina(app, params)
```

Mudar de tela é só mudar o hash (`window.location.hash = "#carrinho"`), sem recarregar a página.

### Contrato de cada tela

Toda tela exporta um objeto com o mesmo formato e uma função que recebe o elemento `#app` e os parâmetros da URL:

```js
export default {
  url: "#cardapio",
  label: "cardápio",   // texto da navbar; "" esconde a tela da navbar
  icon: "cupcake",     // nome do ícone em utils/icones.js
  pagina: cardapio     // function cardapio(app, params)
}
```

Cada tela monta seu HTML com template string e depois liga os eventos em uma função `adicionarEvento`.

### Estado

- **Entre telas:** informações como categoria, busca e id do doce viajam **na URL**, sem estado global.
- **Carrinho e favoritos:** arrays simples em módulos (`services/`). Sobrevivem à navegação, mas **somem ao recarregar a página**, por decisão de projeto (sem persistência).

## Dados mockados

Ficam isolados em `src/js/dadosMockados/`.

**`produtos.js`**

| Campo | Descrição |
|---|---|
| `id` | Identificador único (número) |
| `nome`, `descricao` | Textos exibidos |
| `preco` | Número (ex.: `54.90`) |
| `categoria` | `id` de uma categoria de `categorias.js` |
| `img` | Caminho da foto (`images/produtos/arquivo.jpg`) |
| `destaque` | `true` para aparecer em "Em destaque" na Início |
| `halloween` | `true` para exibir o selo de Halloween |

**`categorias.js`:** `id`, `nome` e `icone` (nome de um ícone de `utils/icones.js`).

**`usuario.js`** e **`pedidos.js`:** perfil e histórico exibidos na tela Conta. O total de cada pedido é calculado a partir dos itens.

## Imagens e ícones

### Fotos dos doces

1. Coloque as fotos em `src/public/images/produtos/`.
2. Aponte para elas no `produtos.js` com a função auxiliar `img("nome-do-arquivo.jpg")`.

Recomendações: imagens quadradas, cerca de 800×800 px, em JPG ou WebP, com 80 a 150 KB cada. Use nomes em minúsculas, sem acentos nem espaços. Se um arquivo estiver faltando ou com nome diferente, a tela mostra o quadrado de fallback com o nome do doce.

> A pasta `public` fica dentro de `src` porque o Vite está configurado com `root: "src"`. Imagens citadas só como texto no JavaScript não entram no build se estiverem fora dela.

### Logo e favicon

- `src/public/images/logo.png`: logo exibido no topo da Início
- `src/public/images/favicon.png`: ícone da aba do navegador, declarado no `index.html`

### Ícones

Os ícones são **SVG inline** em `src/js/utils/icones.js`, sem biblioteca externa. Usam `currentColor`, então a cor vem do CSS. Para usar um ícone:

```js
import { icone } from "../utils/icones.js"

icone("coracao", 20)          // tamanho em px
icone("coracao", "1em", true) // tamanho relativo e preenchido
```

## Design

### Paleta (fundo claro, estilo e-commerce)

| Papel | Cor | Uso |
|---|---|---|
| Fundo | `#ffffff` | Fundo do app |
| Superfície | `#f4f5fa` | Campos e áreas suaves |
| Borda | `#dfe3ef` | Divisórias |
| Azul Corvinal | `#0e1a40` | Topo, botões, títulos e texto |
| Bronze | `#946b2d` | Acentos e item ativo da navbar |
| Abóbora (Halloween) | `#c2570c` | Preços, botões de compra e selos |

Todas as cores, fontes e espaçamentos estão em `src/css/variables.css`. Trocar a identidade visual é só alterar esse arquivo.

### Princípios

- **Mobile-first**, com coluna de no máximo 440 px centralizada
- **Flexbox** para todos os layouts, inclusive as categorias em duas colunas (`flex-wrap`) e o carrossel de destaques
- Fontes do sistema, sem arquivos externos
- Nomes de classe no estilo BEM simplificado (`produto-card__nome`, `navbar__item--ativo`)

## Capacitor

O Capacitor está instalado e configurado, mas **não foi integrado a plataformas nativas**: o projeto é uma demonstração mobile executada na web.

`capacitor.config.json`:

```json
{
  "appId": "com.fatecmc.ravensweets",
  "appName": "Raven Sweets",
  "webDir": "dist",
  "plugins": {
    "SplashScreen": {
      "launchAutoHide": false
    }
  }
}
```

O `webDir` aponta para a saída do build do Vite. Para gerar um app nativo no futuro (opcional):

```bash
npm install @capacitor/android      # ou @capacitor/ios
npm run build
npx cap add android
npx cap sync
npx cap open android
```

Em um app nativo, o splash screen precisa ser escondido por código (`SplashScreen.hide()`), pois está com `launchAutoHide: false`.

## Como evoluir o projeto

**Adicionar um doce**

1. Coloque a foto em `src/public/images/produtos/`.
2. Acrescente um objeto em `produtos.js` com um `id` novo e uma `categoria` existente.

**Adicionar uma categoria:** inclua um item em `categorias.js` com um `icone` que exista em `icones.js`.

**Adicionar uma tela**

1. Crie `src/js/paginas/nova-tela.js` exportando `{ url, label, icon, pagina }`.
2. Registre a tela em `src/js/rotas/rotas.js`.
3. Crie `src/css/paginas/nova-tela.css` e importe em `style.css`.

**Adicionar um ícone:** inclua o trecho SVG (grade 24×24, traço) no objeto `caminhos` de `icones.js`.

## Limitações

- Sem persistência: recarregar a página (ou o navegador do celular descartar a aba) zera carrinho e favoritos
- Sem backend: não há login, pagamento ou pedidos reais; "Finalizar pedido" é apenas uma confirmação visual
- Dados e usuário são fictícios
- Sem testes automatizados

## Autores

**João Pedro** · [github.com/docarmojoao4](https://github.com/docarmojoao4)
**Paulo Lisboa** · [github.com/Pgustavols](https://github.com/Pgustavols)
**Talles Diniz** · [github.com/TallesDiniz](https://github.com/TallesDiniz)
