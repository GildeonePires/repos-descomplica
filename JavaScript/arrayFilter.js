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


// COMO DECLARAR UM ARRAY;

var arrayUm = [5]; // Foi criado um array de 1 elemento contendo o valor 5;
console.log(arrayUm.length);
var arrayDois = new Array(5); // Foi criado um array de tamanho 5, e sem elementos;
console.log(arrayDois.length);
var arrayTres = Array("10", 2); // Foi criado um array de tamanho 2, com 2 elementos;
console.log(arrayTres.length);

// DEFININDO ARRAY

var valores = [8, 1, 7, 2, 9];
console.log(valores[3]); // Mostra o valor na posição 3 - Lembre o array começa pela posição 0;

// Imprimir todas as posições do array

for (var pos = 0; pos < valores.length; pos++) {
  console.log("Posição: " + pos + " tem o valor: " + valores[pos]); // imprime o valor do array na posição POS
}

// cria array e depois insere os valores
var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");

// calcular a média do array VALORES;
let soma = 0;
for (var i = 0; i < valores.length; i++) {
  soma += valores[i];
}
var media = soma / valores.length;
console.log("A média é: " + media);

// calcular a média dos valores impar do array VALORES;
let somaImpar = 0;
for (var i = 0; i < valores.length; i++) {
  if (valores[i] % 2 != 0) somaImpar += valores[i];
}
var mediaImpar = somaImpar / valores.length;
console.log("A média dos impares é: " + mediaImpar);

// calcular a média dos valores pares do array VALORES;
let somaPar = 0;
for (var i = 0; i < valores.length; i++) {
  if (valores[i] % 2 == 0) somaPar += valores[i];
}
var mediaPar = somaPar / valores.length;
console.log("A média dos pares é: " + mediaPar);

//------------------------------------------------------------------//
// Exercicios proprostos;
// 1 - Localizar o maior valor dentro do array;

var valor = [10, 23, 102, 2, 109, 10, 25, 55, 104, 16, 75, 63, 98];
var maiorValor = valor[0];

for (var i = 0; i < valor.length; i++) {
  if (valor[i] > maiorValor) {
    maiorValor = valor[i];
  }
}
// Sabemos que o maior valor contido no array e 109;
console.log(maiorValor);

// 2 - Qual é a cidade com maior tamanho de palavra;

var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];

var maiorPalavar = cidade[0].length;
var nome = cidade[0];
for (var pos = 1; pos < cidade.length; pos++) {
  if (cidade[pos].length > maiorPalavar) {
    maiorPalavar = cidade[pos].length;
    nome = cidade[pos];
  }
}
console.log("Maior nome de cidade é: " + nome);

// Métodos do array

//.join() - Junta os valores contido no arrays formando uma unica string;
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
var novaString = cidade.join("\n");
console.log("A nova string é: \n" + novaString);

//.shift() -  remove o primeiro elemento de um array e retorna esse elemento.
// Este método muda o tamanho do array.
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
var array = cidade.shift();
console.log("O novo array é: " + array);
console.log(cidade.join(" - "));

//.short() - ordena os elementos do próprio array e retorna o array.
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
var array = cidade.sort();
console.log("Array organizado é: " + array);
console.log(cidade.join(" - "));

//.reverse() -  inverte os itens de um array.
// O primeiro elemento do array se torna o último e o último torna-se o primeiro.
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
console.log(cidade.reverse());

//.splice() - altera o conteúdo de uma lista,
//adicionando novos elementos enquanto remove elementos antigos
//array.splice(início, númeroDeElementos, elemento1, elemento2, ..., elementoN);

var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
cidade.splice(0, 0, "Goias", "Tocantins", "Bahia", "Sergipe");
console.log(cidade);

//.lenght() - especifíca o número de elementos em um array
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
console.log(cidade.length);

//.push() - Adiciona um ou mais elementos ao final de um array
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];

cidade.push("Rondonia", "Roraima", "Paui", "Mato grosso");
console.log(cidade);

//.pop() - Remove o último elemento de um array e retorna aquele elemento
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];

var valorRemov = cidade.pop();
console.log("O valor que foi removido é: " + valorRemov.toLocaleUpperCase());
console.log(cidade);

//.slice() - Retorna uma cópia de parte de um array a partir de um subarray

var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];

var copia = cidade.slice(2, 4);
console.log(cidade);
console.log(copia);

//.unshift() - Acrescento um valor no incio do array
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];

cidade.unshift("Jesus");
console.log(cidade);

// Exercicios de numeros positivos e negativos e
//criar um novo arrays so com numeros positivos e outro com numeros negativos

var valores = [-1, 2, 10, -15, 16, 22, -16, -3, 5, 8, 3];
var arrayPositivos = [];
var arrayNegativos = [];
for (var i = 0; i < valores.length; i++) {
  if (valores[i] > 0) {
    arrayPositivos.push(valores[i]);
  } else {
    arrayNegativos.push(valores[i]);
  }
}
console.log(arrayPositivos);
console.log(arrayNegativos);

// Métodos

// adicionando
var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
cidade.splice(0, 0, "Goias", "Tocantins", "Bahia", "Sergipe");
console.log(cidade);

// Removendo

var cidade = [
  "São Paulo",
  "Rio de Janeiro",
  "Espirito santo",
  "Rio grande do norte",
  "Mato grosso do sul",
  "Para",
];
console.log(cidade.indexOf("Rio grande do norte"));
cidade.splice(2, cidade.indexOf("Rio grande do norte"), "Goias");
console.log(cidade);

// Criar um array com 5 nomes - GUILHERME, MANUEL, SAMUEL, DAVI, JOAO
var nomes = ["GUILHERME", "MANUEL", "SAMUEL", "DAVI", "JOAO"];
console.log("Array inicial: " + nomes);

// Acrescentar nome monica;
nomes.unshift("MÔNICA");
console.log("Após adicionar MÔNICA: " + nomes);

// Remova o ultimo elemento do array;
nomes.pop();
console.log("Após remover o último elemento: " + nomes);

// Encontre a posição do Samuel
var pos = nomes.indexOf("SAMUEL");
console.log("Posição de SAMUEL: " + pos);

// Troca Manuel por Emanuel;
var indexManuel = nomes.indexOf("MANUEL");
if (indexManuel !== -1) {
  nomes.splice(indexManuel, 1, "EMANUEL");
}
console.log(nomes);

//.concat() -
var nome = "Gildeone Pires";
var sobrenome = " de Paula";
var nomeCompleto = nome.concat(sobrenome);
console.log(nomeCompleto);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);
array3 = nomeCompleto.concat(" - " + array1.concat(array2));
console.log(array3);

// Array com todos ano;
// Separando por trimestre
var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

var finalPrimeiro = 3;
var finalSegundo = 6;
var finalTerceiro = 9;
var finalQuarto = 12;

var primeiroTrimestre = meses.slice(0,finalPrimeiro);
console.log('1º trimestre é: ' + primeiroTrimestre);
var segundoTrimestre = meses.slice(finalPrimeiro,finalSegundo);
console.log('2º trimestre é: ' + segundoTrimestre);
var terceiroTrimestre = meses.slice(finalSegundo,finalTerceiro);
console.log('3º trimestre é: ' + terceiroTrimestre);
var quartoTrimestre = meses.slice(finalTerceiro,finalQuarto);
console.log('4º trimestre é: ' + quartoTrimestre);

// .filter() - cria um novo array com todos os elementos que 
//passaram no teste implementado pela função fornecida.

var numeros = [1,2,3,4,5,6,7,8,9,10];
var pares = numeros.filter(item => item % 2 == 0);
console.log(pares);

//------------------------------------------------------//
var numeros = [1,2,3,4,5,6,7,8,9,10];
var numerosFiltrados = numeros.filter(
  function(valor){
    return valor > 5;
  }
);

console.log(numerosFiltrados);

//--------------------------------------------------------//
var numeros = [1,2,3,4,5,6,7,8,9,10];
function buscarValores(valor){
  return valor < 5;
}
var numeroEncontrados = numeros.filter(buscarValores);
console.log(numeroEncontrados);
