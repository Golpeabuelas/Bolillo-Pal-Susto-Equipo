import { soloNumeros, validarCantidad } from "../../z-functions/input_validations.js"
import { añadirProductoPedido, cambiarCantidadBack, cambiarCantidadFront, eliminarProductoCarrito, procesoMostrarCarrito } from "./loading_cart.js"
import { procesoCrearTicket } from "./loading_ticket.js"

const Usuario = JSON.parse(localStorage.getItem('usuario')) || null

const contenedorCarrito = document.getElementById('contenedor_productos')

if ( Usuario === null ) {
    window.location.href = '/sign_in'
}

await procesoMostrarCarrito(contenedorCarrito, Usuario.id_usuario)

const sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('click', async () => {
        sliders[i].classList.toggle('active')
        const value = sliders[i].classList.contains('active') ? 1 : 0
        await añadirProductoPedido(Usuario.id_usuario, parseInt(btnEliminarRegistro[i].value), value)
    })
}

const inputCantidad = document.getElementsByClassName('input_cantidad') 
const btnEliminarRegistro = document.getElementsByClassName('boton_accion')
const btnAumentarCantidad = document.getElementsByClassName('mas')
const btnDisminuirCantidad = document.getElementsByClassName('menos')
const btnHacerPedido = document.getElementById('btn_hacer_pedido')

for (let i = 0; i < inputCantidad.length; i++) {
    inputCantidad[i].addEventListener('input', () => {
        soloNumeros(inputCantidad[i])
        validarCantidad(inputCantidad[i])
        cambiarCantidadBack(Usuario.id_usuario, parseInt(btnEliminarRegistro[i].value), inputCantidad[i].value)
    })
}

for (let i = 0; i < btnEliminarRegistro.length; i++) {
    btnEliminarRegistro[i].addEventListener('click', async () => {
        await eliminarProductoCarrito(contenedorCarrito, Usuario.id_usuario, parseInt(btnEliminarRegistro[i].value))
    })
}

for (let i = 0; i < btnAumentarCantidad.length; i++) {
    btnAumentarCantidad[i].addEventListener('click', async () => {
        cambiarCantidadFront(inputCantidad[i], true, 100)
        cambiarCantidadBack(Usuario.id_usuario, parseInt(btnEliminarRegistro[i].value), inputCantidad[i].value)
    })
}

for (let i = 0; i < btnDisminuirCantidad.length; i++) {
    btnDisminuirCantidad[i].addEventListener('click', async () => {
        cambiarCantidadFront(inputCantidad[i], false, 100)
        cambiarCantidadBack(Usuario.id_usuario, parseInt(btnEliminarRegistro[i].value), inputCantidad[i].value)
    })
}

btnHacerPedido.addEventListener('click', () => {
    procesoCrearTicket(Usuario.id_usuario)
})