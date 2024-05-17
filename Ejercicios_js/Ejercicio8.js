/**
 * Crear una función findIndex que acepte un array y un callback y que: 
 * • por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
  devuelva true
  • sí ningún callback devuelve true, devuelva undefined
*/
const prueba = [{
  nombre: 'URS', años:18,
  nombre: 'nazi', años: 26,
  nombre:'EEUU',años:22,
}]
const numeros_par = prueba.findIndex((prueba) =>prueba.años <18)
console.log(numeros_par)