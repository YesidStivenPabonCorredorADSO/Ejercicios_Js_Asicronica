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
// Este se ejecuta despues del bucle y este mostrara  este a traves del alert el cual contiene (i) 100000000
//Esto sucede principalmente porque el for esta iterando sobre (i) este pasando que se sume 1+1+1+1+1, haciendo que al
// Momento de ejecutarse tengo el siguiente parametro 100000000 y esto es lo que se va a ejecutar
