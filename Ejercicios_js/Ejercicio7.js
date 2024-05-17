// Crear una función find que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva el elemento pasado como argumento del primer callback que devuelva true
// • sí ningún callback devuelve true, devuelva undefined
const num = [1, 3, 4, 6, 8, 10, 11, 13, 15, 17]
const concidencias = num.find(function (numero) {
  return numero % 2 === 0;
})
console.log(concidencias)
