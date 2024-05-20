// ¿Cuál es el resultado del código a continuación?
let i=0;
setTimeout(()=>alert(i),100);
for(let j=o;j<100000000;j++){
    i++
}
/***
 * El resultado del codigo va a mostrar 100 millones este por medio de la variable i
 * esto sucede porque se cumple primero es el for, este siendo que se itere el i pasandole 
 * i convirtiendolo en 100 millones 
 * 
 * */