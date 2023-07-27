//Función flecha

const getHora = () =>{
    //sentencias = instrucciones 
    const fecha = new Date(); // creación de objeto date 
    console.log(fecha.getSeconds())
    const tiempo = {hora: fecha.getHours(), 
                    minuto: fecha.getMinutes(), 
                    segundos: fecha.getSeconds()
                }
    document.querySelector(".reloj").innerHTML =  `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundos}`
}

setInterval(getHora, 1000)


function modificarDesc() {
    let desc = document.querySelector("#back")
    setTimeout(() =>{
        desc.textContent="RELOJ DIGITAL";
    },0);
    setTimeout(() => {
        desc.textContent = "SOFÍA DÁVILA";
    }, 3000);

}

modificarDesc()
setInterval(modificarDesc,9000)