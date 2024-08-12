var carros = [
  {
    id: 1,
    modelo: "Corsa",
    marca: "Chevrolet",
    preco: 45000,
    createdAt: 1534506085621,
  },
  {
    id: 1,
    modelo: "Punto",
    marca: "Fiat",
    preco: 120000,
    createdAt: 1534506085621,
  },
];

let total = 0;
for (var i = 0; i < carros.length; i++) {
  total += carros[i].preco;
}

console.log(total);

/*--------------------------------------------------*/
var carros = [
  {
    id: 1,
    modelo: "Corsa",
    marca: "Chevrolet",
    preco: 45000,
    createdAt: 1534506085621,
  },
  {
    id: 1,
    modelo: "Punto",
    marca: "Fiat",
    preco: 125000,
    createdAt: 1534506085621,
  },
];

total = 0;
for (const i in carros) {
  total += carros[i].preco;
  console.log(carros[i].marca);
}
console.log(total);

total = 0;
for (carro of carros) {
  total += carro.preco;
  console.log(carro.marca);
}
console.log(total);

/*--------------------------------------*/

var c = 1;
while (c <= 10) {
  console.log(c);
  c++;
}

const bebidas = ["cafe", "leite", "cha"];
let bebida = "";
do {
  bebida = prompt("Digite uma das bebidas: cafe ou leite ou cha!");
} while (!bebida.includes(bebidas));

const carro = {
  modelo: "Audi A3",
  marca: "Audi",
  ano: 2020,
};

for (let caracteristica in carro) {
  console.log(caracteristica + ": " + carro[caracteristica]);
}

const carros = [
  { modelo: "Audi A3", marca: "Audi", ano: 2020 },
  { modelo: "Jeep Compact", marca: "Jeep", ano: 2021 },
];

for (let indice in carros) {
  console.log("Carro " + (parseInt(indice) + 1) + ":");
  for (let atributo in carros[indice]) {
    console.log(atributo + ": " + carros[indice][atributo]);
  }

  console.log("-----");
}

