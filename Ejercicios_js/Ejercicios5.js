// Crear una función every que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si todas las llamadas al callback devolvieron true
const array=[22,25,30,50];
const prueba = array.every((valor) => {
  return valor >=20;
})
console.log(prueba)