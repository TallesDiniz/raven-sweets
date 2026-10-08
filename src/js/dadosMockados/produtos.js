
const img = (arquivo) => `images/produtos/${arquivo}`;

const listaDeProdutos = [
  // Tortas e Bolos
  {
    id: 1,
    nome: "Torta de Abóbora",
    descricao:
      "Massa amanteigada com recheio cremoso de abóbora e especiarias.",
    preco: 54.9,
    categoria: "tortas",
    img: img("torta-abobora.jpg"),
    destaque: true,
    halloween: true,
  },
  {
    id: 2,
    nome: "Bolo de Aniversário do Harry",
    descricao:
      "Mini bolo de chocolate recheado com brigadeiro artesanal, coberto com glacê rosa vibrante e a famosa escrita em verde com a grafia errada proposital.",
    preco: 69.9,
    categoria: "tortas",
    img: img("Harry-potter-birthday-cake.jpg"),
    destaque: true,
    halloween: false,
  },

  // Cupcakes
  {
    id: 3,
    nome: "Cupcake Corvinal",
    descricao: "Chocolate com mirtilo ou amora..",
    preco: 9.9,
    categoria: "cupcakes",
    img: img("cupcake-corvinal.jpg"),
    destaque: true,
    halloween: false,
  },
  {
    id: 4,
    nome: "Cupcake Abóbora Mágica",
    descricao: "Massa de abóbora com cobertura de cream cheese alaranjado.",
    preco: 8.5,
    categoria: "cupcakes",
    img: img("abobora-magica.jpg"),
    destaque: false,
    halloween: true,
  },

  // Cookies
  {
    id: 5,
    nome: "Biscoitos Varinha das Das",
    descricao: "Biscoitos amanteigados compridos no formato de varinhas mágicas, banhados em chocolate nobre e decorados com detalhes em pasta americana ou confeitos reluzentes.",
    preco: 7.5,
    categoria: "cookies",
    img: img("varinha-das-Das.jpg"),
    destaque: false,
    halloween: false,
  },
  {
    id: 6,
    nome: "Cookie Morcego",
    descricao: "Cookie de cacau em formato de morcego, com glacê roxo.",
    preco: 6.9,
    categoria: "cookies",
    img: img("cookie-morcego.jpg"),
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
    img: img("caldeirao-chocolate.jpg"),
    destaque: true,
    halloween: true,
  },
  {
    id: 8,
    nome: "Sapo de Chocolate com Card Colecionável",
    descricao: "Doce maciço ou recheado com caramelo/praliné de avelã em formato de sapo, embalado em caixas pentagonais roxas e douradas. Acompanha card colecionável de um bruxo.",
    preco: 22.0,
    categoria: "chocolates",
    img: img("sapo-chocolate.jpg"),
    destaque: false,
    halloween: false,
  },

  // Poções (bebidas)
  {
    id: 9,
    nome: "Butterbeer Artesanal",
    descricao: "Bebida sem álcool à base de refrigerante de baunilha/gengibre com xarope de caramelo e coberta por uma espuma cremosa de especiarias e manteiga.",
    preco: 12.0,
    categoria: "bebidas",
    img: img("butterbeer.webp"),
    destaque: false,
    halloween: false,
  },
  {
    id: 10,
    nome: "Poção Felix Felicis",
    descricao: "Soda italiana de maçã verde ou maracujá com corante cintilante comestível (pó de mica), que brilha ao ser agitada..",
    preco: 14.5,
    categoria: "bebidas",
    img: img("felix-felicis.jpg"),
    destaque: true,
    halloween: false,
  },

  // Kits Halloween
  {
    id: 11,
    nome: "Kit Noite de Halloween",
    descricao: "Torta mini, 3 cookies, 2 cupcakes e uma poção.",
    preco: 89.9,
    categoria: "kits",
    img: img("kit-noite-halloween.jpg"),
    destaque: false,
    halloween: true,
  },
  {
    id: 12,
    nome: "Kit Corvinal",
    descricao: "Bolo mini azul, 5 brigadeiros e 2 biscoitos varinha da Das.",
    preco: 79.9,
    categoria: "kits",
    img: img("kit-corvinal.jpg"),
    destaque: false,
    halloween: false,
  },
];

export default listaDeProdutos;
