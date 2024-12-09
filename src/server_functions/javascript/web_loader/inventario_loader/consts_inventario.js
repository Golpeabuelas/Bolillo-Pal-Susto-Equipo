import { registroLleno } from "../../z-functions/important_functions.js"
import { procesoMostrarInventario } from "./loading_inventario.js"
import { mostrarFormAñadir } from "./show_forms.js"

const Usuario = JSON.parse(localStorage.getItem('usuario')) || { permisos: false }

if ( Usuario.permisos == false ) {
    window.location.href = '/index'
} 

const btnAñadir = document.getElementById('btn_añadir') 
const contenedor = document.getElementById('contenedor_gestion')

await procesoMostrarInventario(contenedor)

const productos = document.getElementsByClassName('contenedor_producto')

for (let i = 0; i < productos.length; i++) {
    productos[i].addEventListener('click', () => {
        localStorage.setItem('producto', JSON.stringify({ id_producto: productos[i].dataset.value }))
        window.location.href = `/producto/${productos[i].dataset.value}`
    })
}

btnAñadir.addEventListener('click', () => {
    mostrarFormAñadir(contenedor)

    const btnPreview = document.getElementById('previsualizar')
    const inputsNecesarios = document.getElementsByClassName('required')

    btnPreview.addEventListener('click', () => {
        const lleno = registroLleno(inputsNecesarios)

        if ( lleno === true ) {

        }
    })
})