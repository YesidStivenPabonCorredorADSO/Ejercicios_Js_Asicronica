// Crear una función takeWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos hasta el primer callback que devolvió false
// • (Inverso del dropWhile)
const collect = require('collect.js');  

const array=[1,2,3,4,5,6,7,8,9,10,15,13,14,16]
const coleccion=collect(array)
const takeWhile=coleccion.takeWhile((num)=>{
    return num <10
})
let nuevo_obje=takeWhile.all();
console.log(array)
console.log(nuevo_obje)