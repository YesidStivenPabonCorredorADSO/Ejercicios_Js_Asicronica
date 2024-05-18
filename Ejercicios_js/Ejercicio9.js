// Crear una función dropWhile que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • devuelva un array con los elementos a partir del primer callback que devolvió false
// • (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el
// callback de true, no los agrega, cuando el callback da false por primera vez agrega
const _ = require('lodash');


// todos los elementos restantes a partir de dicho elemento inclusive)

const array=[23,4,2,35,55,-1];
let mostrar_matriz_elminada= _.dropWhile(array,(num)=>{
    return num>0;
})
console.log(array)
console.log(mostrar_matriz_elminada)