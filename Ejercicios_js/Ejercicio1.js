// Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
// comenzando desde desde y terminando con hasta.
// Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
// • Usando setInterval.
// • Usando setTimeout anidado.
function imprimirNumeros(desde,hasta){
    desde=1;
    setTimeout(imprimirNumeros(desde),2000)
    console.log()
}