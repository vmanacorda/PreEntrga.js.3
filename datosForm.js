

const inputNombre = document.querySelector("#inputNombre")
const inputContacto = document.querySelector("#inputContacto")
const inputEmail = document.querySelector("#inputEmail")
const botonEnviar = document.querySelector("#boton")

function guardarFormulario(){

    const datosDelFormulario = {
        nombre: inputNombre.value,
        NumeroDeContacto: inputContacto.value,
        email: inputEmail.value,
      
    }

    let resultado = JSON.stringify(datosDelFormulario);
    localStorage.setItem("datosDelFormulario", resultado)

    
}

botonEnviar.addEventListener(`click`,guardarFormulario)