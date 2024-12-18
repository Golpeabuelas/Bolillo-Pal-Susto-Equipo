import { mostrarGestionInventario, procesoMostrarInventario } from "./loading_index.js"

const Usuario = JSON.parse(localStorage.getItem('usuario')) || { correo: null } 
const contenedorProductos = document.getElementById('contenedor_productos')
const header = document.getElementById('header')

let productos = null

if ( Usuario.correo ) {
    mostrarGestionInventario(header, Usuario.permisos)
    await procesoMostrarInventario(contenedorProductos)
} else {
    await procesoMostrarInventario(contenedorProductos)
}

productos = document.getElementsByClassName('contenedor_producto')

for (let i = 0; i < productos.length; i++) {
    productos[i].addEventListener('click', () => {
        const nombreProducto = productos[i].querySelector('h2').innerText
        
        localStorage.setItem('producto', JSON.stringify({ id_producto: parseInt(productos[i].dataset.value) }))
        window.location.href = `/producto/detalle/${nombreProducto}`
    })
}