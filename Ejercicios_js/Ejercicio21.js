// 21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza
// Promise.allSettled() para obtener información sobre el estado de todas las Promises.
const promesa1 = new Promise((resolver, reject) => {
  setTimeout(() => {
    resolver("Promesa Si se resolvio");
  }, 2000);
});
const promesa2 = new Promise((resolver, reject) => {
  setTimeout(() => {
    resolver("Otra promesa se resolvio");
  }, 3000);
});
const promesa3 = new Promise((resolver, reject) => {
  setTimeout(() => {
    reject("No cumplio la promesa");
  }, 4000);
});
Promise.allSettled([promesa1, promesa2, promesa3]).then((valor) => {
  console.log(valor);
});
