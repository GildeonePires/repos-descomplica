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
    var primTrimestre = meses.slice(0, 2);
    console.log(primTrimestre);
  } else if (i < 6) {
    var segunTrimestre = meses.slice(3, 2);
    console.log(segunTrimestre);
  } else if (i < 9) {
    var tercTrimestre = meses.slice(6, 2);
    console.log(tercTrimestre);
  } else {
    var quartTrimestre = meses.slice(9, 2);
    console.log(quartTrimestre);
  }
}