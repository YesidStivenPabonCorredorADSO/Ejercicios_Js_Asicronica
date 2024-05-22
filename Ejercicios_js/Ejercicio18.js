// 18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then()
// para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo,
// mostrar solo los nombres que comiencen con "A").
function llamado_filtrar() {
  setTimeout(() => {
    fetch("../json/Ejercicio18.json")
      .then((response) => {
        return response.json();
      })
      .then((date) => {
        date.forEach((elemento) => {
          if (elemento.nombre.toUpperCase().charAt(0) === "A") {
            console.log(elemento);
          }
        });
      });
  }, 3000);
}
llamado_filtrar();
