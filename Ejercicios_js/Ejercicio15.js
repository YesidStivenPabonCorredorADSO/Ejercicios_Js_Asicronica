// Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
// "Error: Promise rechazada".
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise Rechazada");
  }, 2000);
});
promesa.catch((e) => {
  console.log(e);
});
