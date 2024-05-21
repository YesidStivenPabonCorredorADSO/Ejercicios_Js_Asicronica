// Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
// resuelta" cuando se cumpla
const prueba= new Promise((resolver,reject)=>{
    setTimeout(()=>{
        resolver("Promise resuelta")
    },3000);
});
prueba.then((help)=>{
    console.log(help);
});

