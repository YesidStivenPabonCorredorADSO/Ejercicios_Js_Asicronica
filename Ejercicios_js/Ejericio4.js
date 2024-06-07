// Crear una función filter que acepte un array y un callback y que:
// • por cada elemento del array ejecute el callback pasándole dicho elemento como
// argumento
// • sí dicho callback devuelve true, pushea el elemento a un nuevo array
// • devuelva el array final con los elementos que pasaron el "filtro".

// Numeros impares
// let arreglo=[];
// let contador=0;
// while(contador<10){
//     let num=Number(prompt("Ingrese los numero que desea (Si quiere terminar el programa ingrese -1"))
//     if(num===-1)break;
//     arreglo.push(num)
//     contador++;
// }
// function filter(array,callback){
//     const nuevo_array=[];
//     for(let i=0;i<array.length;i++){
//         if(callback(array[i])){
//             nuevo_array.push(array[i])
//         }
//     }
//     return nuevo_array;
// }
// function espar(num){
//     return num %2===0;
// }
// let impares=filter(arreglo,function(num){
//     return !espar(num)
// })
// console.log(`Los numeros son impares ${impares}`)


// Numeros Pares
// let arreglo=[];
// let contador=0;
// while(contador<10){
//     let num=Number(prompt("Ingrese los numero que desea (Si quiere terminar el programa ingrese -1"))
//     if(num===-1)break;
//     arreglo.push(num)
//     contador++;
// }
// function filter(array,callback){
//     const nuevo_array=[];
//     for(let i=0;i<array.length;i++){
//         if(callback(array[i])){
//             nuevo_array.push(array[i])
//         }
//     }
//     return nuevo_array;
// }
// function par(num){
//     return num %2===0;
// }
// let pares=filter(arreglo,par)
// console.log(`Los numeros son impares ${pares}`)

// Numeros Pares
const prueba=[1,2,3,4,5,6,7,8,9,10];
const filtrar_num=prueba.filter(function(numero){
    return numero %2===0;
})
const filtrar_num2=prueba.filter(function(numero){
    return numero%2 !==0;
})
console.log(filtrar_num)
console.log(filtrar_num2)