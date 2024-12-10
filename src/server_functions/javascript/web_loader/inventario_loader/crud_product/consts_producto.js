import { obtenerImagen, registroLleno } from "../../../z-functions/important_functions.js"
import { soloLetras, soloNumeros } from "../../../z-functions/input_validations.js"
import { mostrarFormBorrar, mostrarFormEditar } from "../show_forms.js"
import { procesoEditarProducto, procesoLlenarCard } from "./loading_producto.js"
import { newProduct } from "./newProduct.js"

const Producto = JSON.parse(localStorage.getItem('producto')) || null
const Usuario = JSON.parse(localStorage.getItem('usuario')) || { correo: null }

localStorage.removeItem('producto')

const contenedor = document.getElementById('contenedor_producto')
const contenedorForm = document.getElementById('contenedor_formularios')
const btnEditar = document.getElementById('btn_editar')
const btnBorrar = document.getElementById('btn_borrar')

const imagenDefault = '/images/img_default.png'

if ( Usuario.correo == null || Usuario.permisos == false || Producto == null ) {
    window.location.href = '/index'
}

const producto = await procesoLlenarCard(contenedor, Producto.id_producto)

btnEditar.addEventListener('click', () => {
    mostrarFormEditar(contenedorForm, producto)

    const id_producto = producto.id_producto
    const nombre_producto = document.getElementById('nombre_producto')
    const imagen_producto = document.getElementById('imagen_producto')
    const descripcion_producto = document.getElementById('descripcion_producto')
    const precio = document.getElementById('precio')
    const categoria = document.getElementById('categoria')
    const cantidad = document.getElementById('cantidad')
    
    const btn_editar = document.getElementById('submit_editar')
    const btnPrevisualizar = document.getElementById('previsualizar')

    const contenedor_imagen = document.getElementById('contenedor_imagen')
    const inputsNecesatrios = document.getElementsByClassName('required')

    const cargarPrecio = document.getElementById('cargar_precio')
    const cargarNombre = document.getElementById('cargar_nombre')

    nombre_producto.addEventListener('input', () => {
        soloLetras(nombre_producto)
    })

    imagen_producto.addEventListener('change', async (e) => {
        newProduct.imagenProducto = await obtenerImagen(contenedor_imagen, imagenDefault, e)   
    })

    descripcion_producto.addEventListener('input', () => {
        soloLetras(descripcion_producto)
    })

    precio.addEventListener('input', () => {
        soloNumeros(precio)
    })

    categoria.addEventListener('input', () => {
        soloLetras(categoria)
    })

    cantidad.addEventListener('input', () => {
        soloNumeros(cantidad)
    })

    btnPrevisualizar.addEventListener('click', (event) => {
        event.preventDefault()

        cargarNombre.textContent = nombre_producto.value
        cargarPrecio.textContent = precio.value
    })

    btn_editar.addEventListener('click', async (event) => {
        event.preventDefault()
        
        const lleno = registroLleno(inputsNecesatrios)
        console.log(inputsNecesatrios)
        if ( lleno === true && newProduct !== null) {
            newProduct.nombreProducto = nombre_producto.value
            newProduct.descripcionProducto = descripcion_producto.value
            newProduct.precio = precio.value
            newProduct.categoria = categoria.value
            newProduct.cantidad = cantidad.value

            await procesoEditarProducto(id_producto, newProduct.nombreProducto, newProduct.imagenProducto, newProduct.descripcionProducto, newProduct.precio, newProduct.categoria, newProduct.cantidad)

            window.location.href = '/-index'
        }
    })
})

btnBorrar.addEventListener('click', () => {
    mostrarFormBorrar(contenedorForm, producto)
})
