// Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
// diga "Operación completada". Utiliza async/await.
async function day(ms) {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operacion Completada");
    }, ms);
  });

  let resultado = await promesa;

  console.log(resultado);
}
day(3000);
