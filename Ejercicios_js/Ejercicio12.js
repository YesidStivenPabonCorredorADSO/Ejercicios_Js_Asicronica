// La función incorporada setTimeout utiliza callbacks. Crea una alternativa basada en
// promesas.
// La función delay(ms) debería devolver una promesa. Esa promesa debería resolverse
// después de ms milisegundos, para que podamos agregarle. then, así:
function day(ms){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Se ejecuto la promresa")
    },ms)
})
}
day(3000)
.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})