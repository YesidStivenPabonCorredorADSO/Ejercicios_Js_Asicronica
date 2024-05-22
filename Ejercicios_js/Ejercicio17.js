// Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos
// obtenidos en la consola.
function prueba_llamar_json(){
        setTimeout(()=>{
            fetch('../json/Ejercicio17.json')
            .then((response=>{
                return response.json()
            }))
                .then((datos)=>{
                    console.log(datos)})
                    .catch((error)=>{
                        console.log("No se encontro los datos",error)
                    })
        },3000)
    }
    prueba_llamar_json()
