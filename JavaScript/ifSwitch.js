// let pais = "Brasil";

// if (pais != "Brasil") {
//   console.log("Você é estrangeiro");
// } else {
//   console.log("Você é brasileiro");
// }

// var idade = 22;

// if (idade < 16) {
//   console.log("Não vota");
// } else {
//   console.log("Obrigatório votar!");
// }

// /**************************************************/

// let diaSem = 9;

// switch (diaSem) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda");
//     break;
//   case 3:
//     console.log("Terça");
//     break;
//   case 4:
//     console.log("Quarta");
//     break;
//   case 5:
//     console.log("Quinta");
//     break;
//   case 6:
//     console.log("Sexta");
//     break;
//   case 7:
//     console.log("Sábado");
//     break;
//   default:
//     console.log("Dia da semana não encontrado");
// }

// let totalCompra = 150;
// let desconto = "";

// if (totalCompra > 200) {
//   desconto = "20%";
// } else if (totalCompra > 100) {
//   desconto = "10%";
// } else if (totalCompra > 50) {
//   desconto = "5%";
// } else {
//   desconto = "Sem desconto";
// }

// console.log(desconto);

// /*

// Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ 
// deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. 
// Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando 
// que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for 
// selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o 
// valor a ser pago, formatado com duas casas decimais.

// */

let bebida = prompt("Escolha uma bebida: Café, Leite ou Chá").trim();
let valor;

switch (bebida) {
  case "Café":
    valor = 1.25;
    alert(
      `A bebida escolhida é: "${bebida}" e o valor a ser pago será: "R$ ${valor}"`
    );
    break;
  case "Leite":
    valor = 5.50;
    alert(
      `A bebida escolhida é: "${bebida}" e o valor a ser pago será: "R$ ${valor}"`
    );
    break;
  case "Chá":
    valor = 3.25;
    alert(
      `A bebida  escolhida é: "${bebida}" e o valor a ser pago será: "R$ ${valor}"`
    );
    break;
    default:
        alert(
            `Opção inválida! A bebida escolhida deve ser : "Café" ou "Leite" ou "Chá"`
          );  
}

// function escolherBebida() {
//     let bebida;
//     let valor;
//     const opcoesValidas = ["Café", "Leite", "Chá"];
    
//     // Loop para solicitar a escolha da bebida até que seja válida
//     do {
//         bebida = prompt("Escolha uma bebida: Café, Leite ou Chá").trim();
        
//         if (opcoesValidas.includes(bebida)) {
//             switch (bebida) {
//                 case "Café":
//                     valor = 1.25;
//                     break;
//                 case "Leite":
//                     valor = 5.50;
//                     break;
//                 case "Chá":
//                     valor = 3.25;
//                     break;
//             }
//             alert(
//                 `A bebida escolhida é: "${bebida}" e o valor a ser pago será: "R$ ${valor.toFixed(2)}"`
//             );
//         } else {
//             alert(
//                 `Escolha inválida! A bebida escolhida deve ser: "Café", "Leite" ou "Chá"`
//             );
//         }
//     } while (!opcoesValidas.includes(bebida));
// }

// escolherBebida();