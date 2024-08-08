// var carro = [
//   "Palio",
//   "Fiat",
//   "Vermelho",
//   2010,
//   2011,
//   "Gildeone Pires",
//   "AAA-1234",
// ];
// console.log(carro);

// var carro = Array(
//   "Palio",
//   "Fiat",
//   "Vermelho",
//   2010,
//   2011,
//   "Gildeone Pires",
//   "AAA-1234"
// );
// console.log(carro);

// carro.splice(2,4);
// console.log(carro);

// console.log(carro.slice(1));

// var arr2 = [1,2,3,4,5,6,7];
// console.log(arr2);
// arr2.splice(2,3);
// console.log(arr2);

// var nomes = ['Maria', 'Joao', 'Lucas', 'Pedro'];
// var novos = nomes.splice(1,1,'Luiz');
// console.log(nomes);
// console.log(novos);

// var pais = ['Brazil', 'Argentina', 'Colombia'];
// pais.unshift('Uruaguai');
// console.log(pais);

var nome = ["Guilherme", "Manuel", "Samuel", "Davi", "Joao"];
console.log(nome);

// Acrescente Monica
nome.unshift("Monica");
console.log(nome);

// Retire o ultimo elemento do array
nome.pop();
console.log(nome);

// Encontre a posição do Samuel
for (let i = 0; i < nome.length; i++) {
  if (i == nome.indexOf("Samuel")) {
    console.log("Posição do nome Samuel é: " + i);
  }
}

// Trocar o Manuel por Emanuel
let posNome = nome.indexOf("Manuel");
console.log(posNome + " | " + nome[posNome]);
let trocaNome = nome.splice(posNome, 1, "Emanuel");
console.log(trocaNome);
console.log(nome);

//Manipulando mai Arrays

let array = [1, 2, 3, "hello word", 4.12, true];
let newArray = array.slice(1, 3);
console.log(array);
console.log(newArray);

let nome = "Gildeone Pires";
let sobreNome = " de Paula";
let nomeCompleto = nome.concat(sobreNome);
console.log(nomeCompleto);

//Separe por trimestre
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

for (let i = 0; i < meses.length; i+3) {
  if (i < 3) {
    var primTrimestre = meses.slice(0,3);
    console.log(primTrimestre);
  } else if (i < 6) {
    var segunTrimestre = meses.slice(3,2);
    console.log(segunTrimestre);
  } else if (i < 9) {
    var tercTrimestre = meses.slice(6,2);
    console.log(tercTrimestre);
  } else {
    var quartTrimestre = meses.slice(9,2);
    console.log(quartTrimestre);
  }
}
