// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
// => callback

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var novoArr = arr.filter((item) => item % 2 == 0); // Inline
console.log(novoArr);

// Outra forma com função
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosFiltrados = arr.filter(function (valor) {
  return valor > 5;
});
console.log(numerosFiltrados);

// Outra forma
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function buscarValores(valor) {
  return valor < 5;
}
var numerosFiltrados = arr.filter(buscarValores);
console.log(numerosFiltrados);

// Outra forma
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var r1 = arr.filter((valor) => {
  return valor > 5;
});
console.log(r1);

//Outra forma
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var r2 = arr.filter((valor) => valor > 5);
console.log(r2);

//Outra forma usando objeto

var funcionario = [
  { nome: "Luiz", idade: 62 },
  { nome: "Davi", idade: 22 },
  { nome: "Arthur", idade: 18 },
  { nome: "Lucas", idade: 40 },
];

var pessoasListagem = funcionario.filter(function (valor) {
  console.log(valor.nome);
});

var pessoasListagem = funcionario.filter(function (valor) {
  return valor.nome.length <= 5;
});
console.log(pessoasListagem);

// Exercicio

var produtos = [
  { id: 1, descricao: "Smartphone", categoria: "Eletronico" },
  { id: 2, descricao: "Notebook", categoria: "Eletronico" },
  { id: 3, descricao: "Ferro de passar", categoria: "Eletrodomestico" },
  { id: 4, descricao: "Mesa escritorio", categoria: "Moveis" },
  { id: 5, descricao: "Armario", categoria: "Moveis" },
  { id: 6, descricao: "Sofá", categoria: "Moveis" },
  { id: 7, descricao: "Televisor", categoria: "Eletronico" },
  { id: 8, descricao: "Home-teather", categoria: "Eletrodomestico" },
  { id: 9, descricao: "Fogão", categoria: "Eletrodomestico" },
  { id: 10, descricao: "Máquina de lavar", categoria: "Eletronico" },
  { id: 11, descricao: "Geladeira", categoria: "Eletrodomestico" },
  { id: 12, descricao: "Tanquinho", categoria: "Eletronico" },
  { id: 13, descricao: "Guarda-roupa", categoria: "Moveis" },
  { id: 14, descricao: "Cama", categoria: "Moveis" },
  { id: 15, descricao: "Freezer", categoria: "Eletrodomestico" },
  { id: 16, descricao: "Bicicleta", categoria: "Utilitarios" },
];

var catEletronico = produtos.filter(function (valor) {
  return valor.categoria === "Eletronico";
});
console.log(catEletronico);

var nomeProduto = catEletronico.map(function (valor) {
  return valor.descricao;
});

nomeProduto.sort();
console.log(
  nomeProduto.map(function (valor) {
    return valor.toLocaleUpperCase();
  })
);
