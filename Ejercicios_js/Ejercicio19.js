// Crea una función asincrónica que realice una llamada a un archivo local en formato json y
// luego manipule los datos recibidos para mostrar información específica.
async function asicronica() {
  const response = await fetch("../json/Ejercicio19.json");
  const date = await response.json();
  const prueba = date.filter((persona) => persona.age <= 18);
  console.log(prueba);
}
asicronica();
