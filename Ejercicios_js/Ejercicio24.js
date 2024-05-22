// Crear un objeto proxy usando la clase Proxy
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `la propiedad "${prop}" no existe en el objeto persona`
      );
    }
    if (
      prop === "nombre" &&
      prop === "apellido" &&
      !/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor)
    ) {
      return console.error(
        `la propiedad "${prop}" solo acepta letras y espacios en blanco`
      );
    }
    obj[prop] = valor;
  },
};

const persona_nueva = new Proxy(persona, manejador);
persona_nueva.nombre = "Yesid";
persona_nueva.apellido = "Pabon";
persona_nueva.edad = 18;
console.log(persona_nueva);
console.log(persona);
