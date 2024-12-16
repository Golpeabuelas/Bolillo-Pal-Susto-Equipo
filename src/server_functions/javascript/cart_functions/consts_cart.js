import { soloNumeros, validarCantidad } from "../z-functions/input_validations.js"

const Usuario = JSON.parse(localStorage.getItem('usuario')) || null

const inputCantidad = document.getElementsByClassName('input_cantidad') 
const contenedorCarrito = document.getElementById('contenedor_productos')


if ( Usuario === null ) {
    window.location.href = '/sign_in'
}



for (let i = 0; i < inputCantidad.length; i++) {
    inputCantidad[i].addEventListener('input', () => {
        soloNumeros(inputCantidad[i])
        validarCantidad(inputCantidad[i])
    })
}

