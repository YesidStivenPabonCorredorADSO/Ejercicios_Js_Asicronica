// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.
// SetTiemout
// let iniciando = alert("Iniciando el programa....");
// let desde = parseInt(prompt("Ingrese un numero para que inicie "));
// let hasta = parseInt(prompt("Ingrese el numero para que termine"));
// let timeout = setTimeout(function imprimirNumeros() {
//   console.log(desde);
//   desde++;
//   if (desde < hasta) {
//     timeout = setTimeout(imprimirNumeros, 1000);
//   } else {
//     alert("Termino el conteo");
//   }
// }, 1000);

// SetInterval
// function imprimirNumeros() {
//   const siguiente = setInterval(() => {
//     if (desde <= hasta) {
//       console.log(desde++);
//     } else {
//       alert("Termino el conteo");
//     }
//   }, 1000);
// }
// imprimirNumeros();
