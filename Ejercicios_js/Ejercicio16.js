// Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
// devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados

// y mostrar el resultado final.
const promesa_contenedora = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(2);
  }, 1000);
})
  .then(function (resultado) {
    console.log(resultado);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resultado + 2);
      }, 1000);
    });
  })
  .then(function (resultado) {
    console.log(resultado);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(resultado + 10);
      }, 1000);
    });
  })
  .then(function (resultado) {
    console.log(resultado);
  });
