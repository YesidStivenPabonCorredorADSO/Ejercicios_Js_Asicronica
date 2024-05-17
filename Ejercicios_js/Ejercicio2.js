//  En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
// pesado que demora más de 100 ms en finalizar.
// ¿Cuándo se ejecutará la función programada y por qué se ejecutará?
// a) Después del bucle.
// b) Antes del bucle.
// c) Al comienzo del bucle.
//  ¿Qué va a mostrar alert()?
let i = 0;
setTimeout(() => alert(i), 100);
for (let j = 0; j < 100000000; j++) {
  i++;
}
/**
 * El programa se ejecuta despues del bucle esto sucede porque javascript tiene un motor que se llama runtime que este,
 * se basa en un bucle de eventos, por lo cual este es el encargado de manejar las tareas asincronas.
 * Se inicia con el setTiemout el cual se realiza un temporizador que se configuro que tiene el momento de su ejecucion,
 * es de 100 milisegundos pero en lugar de bloquearse se sigue ejecutandose hasta que se ejecute el codigo sincrono que es,
 * el for lo que hace el for es incrementar la variable i, la cual la ya estaba creada y inicializada en 0, entoces el for
 * la va seguir incrementando hasta que llegue a 100 millones, el motor va a volver hacia la cola de eventos donde tomara
 * el setTiemout se va a mostrar los 100 millones esto porque el for ya itero sobre i.
 */


