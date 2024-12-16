import { mostrarGestionInventario, procesoMostrarInventario } from "./loading_index.js"

const Usuario = JSON.parse(localStorage.getItem('usuario')) || { correo: null } 
const contenedorProductos = document.getElementById('contenedor_productos')
const header = document.getElementById('header')

if ( Usuario.correo ) {
    mostrarGestionInventario(header, Usuario.permisos)
    procesoMostrarInventario(contenedorProductos)
} else {

}