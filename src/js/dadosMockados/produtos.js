const img = (texto) =>
  `https://placehold.co/300x300/f3ead8/946b2d?text=${encodeURIComponent(texto)}`;

const listaDeProdutos = [
  // Tortas e Bolos
  {
    id: 1,
    nome: "Torta de Abóbora",
    descricao:
      "Massa amanteigada com recheio cremoso de abóbora e especiarias.",
    preco: 54.9,
    categoria: "tortas",
    img: img("Torta de Abóbora"),
    destaque: true,
    halloween: true,
  },
  {
    id: 2,
    nome: "Bolo Corvo Azul",
    descricao:
      "Bolo de baunilha com cobertura azul-meia-noite e detalhes dourados.",
    preco: 69.9,
    categoria: "tortas",
    img: img("Bolo Corvo Azul"),
    destaque: true,
    halloween: false,
  },

  // Cupcakes
  {
    id: 3,
    nome: "Cupcake Corvo",
    descricao: "Chocolate meio amargo com chantilly azul e asas de chocolate.",
    preco: 9.9,
    categoria: "cupcakes",
    img: img("Cupcake Corvo"),
    destaque: true,
    halloween: false,
  },
  {
    id: 4,
    nome: "Cupcake Abóbora Mágica",
    descricao: "Massa de abóbora com cobertura de cream cheese alaranjado.",
    preco: 8.5,
    categoria: "cupcakes",
    img: img("Cupcake Abóbora"),
    destaque: false,
    halloween: true,
  },

  // Cookies
  {
    id: 5,
    nome: "Cookie Varinha",
    descricao: "Cookie crocante com gotas de chocolate e varinha de pretzel.",
    preco: 7.5,
    categoria: "cookies",
    img: img("Cookie Varinha"),
    destaque: false,
    halloween: false,
  },
  {
    id: 6,
    nome: "Cookie Morcego",
    descricao: "Cookie de cacau em formato de morcego, com glacê roxo.",
    preco: 6.9,
    categoria: "cookies",
    img: img("Cookie Morcego"),
    destaque: false,
    halloween: true,
  },

  // Chocolates
  {
    id: 7,
    nome: "Caldeirão de Chocolate",
    descricao: "Caldeirão comestível recheado com trufas variadas.",
    preco: 24.9,
    categoria: "chocolates",
    img: img("Caldeirão de Chocolate"),
    destaque: true,
    halloween: true,
  },
  {
    id: 8,
    nome: "Brigadeiro Bruxo",
    descricao: "Caixa com 6 brigadeiros gourmet de sabores encantados.",
    preco: 22.0,
    categoria: "chocolates",
    img: img("Brigadeiro Bruxo"),
    destaque: false,
    halloween: false,
  },

  // Poções (bebidas)
  {
    id: 9,
    nome: "Poção Azul",
    descricao: "Limonada de mirtilo com gelo e toque cítrico. 400 ml.",
    preco: 12.0,
    categoria: "bebidas",
    img: img("Poção Azul"),
    destaque: false,
    halloween: false,
  },
  {
    id: 10,
    nome: "Chocolate Quente do Castelo",
    descricao: "Chocolate cremoso com marshmallow e canela. 300 ml.",
    preco: 14.5,
    categoria: "bebidas",
    img: img("Chocolate Quente"),
    destaque: true,
    halloween: false,
  },

  // Kits Halloween
  {
    id: 11,
    nome: "Kit Noite de Halloween",
    descricao: "Torta mini, 4 cookies, 2 cupcakes e uma poção.",
    preco: 89.9,
    categoria: "kits",
    img: img("Kit Halloween"),
    destaque: false,
    halloween: true,
  },
  {
    id: 12,
    nome: "Kit Corvinal",
    descricao: "Bolo mini azul, 4 brigadeiros e 2 cookies varinha.",
    preco: 79.9,
    categoria: "kits",
    img: img("Kit Corvinal"),
    destaque: false,
    halloween: false,
  },
];

export default listaDeProdutos;
