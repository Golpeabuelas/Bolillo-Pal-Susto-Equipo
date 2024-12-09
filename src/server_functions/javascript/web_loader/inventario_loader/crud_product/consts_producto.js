import { mostrarFormEditar } from "../show_forms.js"
import { procesoLlenarCard } from "./loading_producto.js"

const Producto = JSON.parse(localStorage.getItem('producto')) || null
const Usuario = JSON.parse(localStorage.getItem('usuario')) || { correo: null }

localStorage.removeItem('producto')

const contenedor = document.getElementById('contenedor_producto')
const contenedorForm = document.getElementById('contenedor_formularios')
const btnEditar = document.getElementById('btn_editar')
const btnBorrar = document.getElementById('btn_borrar')

if ( Usuario.correo == null || Usuario.permisos == false || Producto == null ) {
    window.location.href = '/index'
}

const producto = await procesoLlenarCard(contenedor, Producto.id_producto)

btnEditar.addEventListener('click', () => {
    mostrarFormEditar(contenedorForm, producto)
})