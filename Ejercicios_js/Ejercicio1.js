// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.
// SetTiemout
let iniciando = alert("Iniciando el programa....");
let desde = parseInt(prompt("Ingrese un numero para que inicie "));
// let hasta = parseInt(prompt("Ingrese el numero para que termine"));
// let timeout = setTimeout(function imprimirNumeros() {
// console.log(desde);
// desde++;
//   if (desde <= hasta) {
//     timeout = setTimeout(imprimirNumeros, 1000);
//   } else {
//     alert("Termino el conteo");
//   }
// }, 1000);
/*
En la linea 7 estamos imprimiendo un alert la cual nos indica que se esta iniciando el programa,en la linea 8 estamos creando
una variable que se llama "desde" la cual estamos indica que la cadena de texto se va transformar en un numero entero, mejor
dicho lo estamos parseando convirtiendo un argumento tipo cadena, texto devolviendolo en un tipo entero, de igual forma tambien
en la linea 9. En la linea 10 estamos creando una variable que se llama timeout donde estamos agregandole una funcion de retraso
a traves de setTimeout Para despues,crear una funcion la cual le agregamos un parametro el cual es "imprimirNumeros " la cual esta va 
obtener el retraso de un 1 milisegundo, en la linea 11 estamos imprimiendo la variable "desde", pero a su vez le estamos agregando
un autoincrementable esto porque al momento que se imprima el valor original en la varible desde se va a incrementar 1, para despues
de esta forma iterarlo, recorrerlo de forma indirecta a traves del parametro "imprimirNumeros".
En la linea 13 estamos verificando si el valor de la variable "desde" es menor que el valor que contiene la variable hasta
para despues en la linea 14 estamos llamando la funcion, "setTiemout(imprimirNumero,1000)" este se aproximaria si la varible
desde es menor a la variable hasta,la funcion setTimeout lo va a tomar, a traves del parametro y la condicion se cumple, esto se va a repetir imprimiendose nuevamete
de esta manera incrementando el valor de la varibale "desde"Si no se cumple la condición, es decir, si el valor de desde es mayor que el valor de hasta, 
se muestra una ventana emergente con el mensaje "Termino el conteo" utilizando alert("Termino el conteo");. Esto indica que se ha alcanzado el final del conteo y se 
ha terminado la ejecución de la función imprimirNumeros()
*/

// SetInterval
function imprimirNumeros() {
  const siguiente = setInterval(() => {
    if (desde <= hasta) {
      console.log(desde++);
    } else {
      alert("Termino el conteo");
    }
  }, 1000);
}
imprimirNumeros();
/*
En este codigo estamos tomando 3 variables ya usadas la cuales estan en la linea 7,8,9.
Lo diferente de este codigo es que estamos utilizando el metodo setInterval, el cual este es el encargado
de repetir el programa una y otra veces mas
En la linea 37 estamos creando una funcion declarada que tiene el nombre de "imprimirNumeros"
Para despues en la linea 38 crear una constante que se llama "siguiente" la cual esta conteniendo la funcion 
setInterval dentro de esta misma llamar un call backs donde estamos utilizando un arrow fuction la cual nos va
a retornar implicitamente lo que esta despues de la linea 38 
Esto en la linea 39 estamos agregando una condicional la cual es si desde es menor o igual a hasta donde si se cumple
la condicion que "desde" es menor a hasta se va a imprimir el valor de la varible desde y de esta manera se va a auto
incrementar porque si se cumple la condicion se va a ejecutar el programa nuevamente hasta que termine, que desde ya no sea
menor que hasta esto porque se devuelve el valor y se sigue incrementando y cuando esto suceda se va dirigir a traves del 
else que nos va a indicar a traves de alert que el conteo termino 
*/