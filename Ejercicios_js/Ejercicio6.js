// Crear una función some que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva true si al menos una de las llamadas al callback devolvió true
const prueba = [-1, 2, 3, 4, 9]
const prueba_1 = prueba.some(function(numero){
  return numero <=10
})
console.log(prueba_1)