const listaDePedidos = [
  {
    numero: 1042,
    data: "05/10/2026",
    status: "em preparo",
    itens: [
      { nome: "Kit Noite de Halloween", quantidade: 1, preco: 89.9 },
      { nome: "Poção Azul", quantidade: 2, preco: 12.0 },
    ],
  },
  {
    numero: 1017,
    data: "21/09/2026",
    status: "entregue",
    itens: [
      { nome: "Torta de Abóbora", quantidade: 1, preco: 54.9 },
      { nome: "Cupcake Corvo", quantidade: 2, preco: 9.9 },
    ],
  },
  {
    numero: 988,
    data: "02/09/2026",
    status: "entregue",
    itens: [
      { nome: "Caldeirão de Chocolate", quantidade: 1, preco: 24.9 },
      { nome: "Cookie Varinha", quantidade: 3, preco: 7.5 },
    ],
  },
];

export default listaDePedidos;
