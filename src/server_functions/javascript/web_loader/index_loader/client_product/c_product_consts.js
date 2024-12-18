
import { procesoLlenarCard, mostrarBotonAñadirCarrito, crearRegistroCarrito } from "./loading_c_product.js"

const Producto = JSON.parse(localStorage.getItem('producto')) || null
const Usuario = JSON.parse(localStorage.getItem('usuario')) || null 

localStorage.removeItem('producto')

const contenedor = document.getElementById('contenedor_producto')
const contendorInformacionProducto = document.getElementById('contenedor_informacion_producto')

if ( Producto === null ) {
    window.location.href = '/index'
} 

await procesoLlenarCard(contenedor, contendorInformacionProducto, Producto.id_producto)

let btnCart = null

if ( Usuario ) {
    mostrarBotonAñadirCarrito(contendorInformacionProducto)
    btnCart = document.getElementById('btn_add_cart')
}

btnCart.addEventListener('click', () => {
    crearRegistroCarrito(Usuario.id_usuario, Producto.id_producto, 1)
})