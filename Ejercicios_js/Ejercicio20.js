// Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego
// utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
const promesa1 = new Promise((resolver, reject) => {
  setTimeout(() => {
    resolver("Promesa 1, resuelta");
  }, 3000);
});
const promesa2 = new Promise((resolver, reject) => {
  setTimeout(() => {
    resolver("Promesa 2, resuelta");
  }, 4000);
});
const promesa3 = new Promise((resolver, reject) => {
  setTimeout(() => {
    resolver("Promesa 3, resuelta");
  }, 5000);
});
Promise.all([promesa1, promesa2, promesa3]).then((valor) => {
  console.log(valor);
});
