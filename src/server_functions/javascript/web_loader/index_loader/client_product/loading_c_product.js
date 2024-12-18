export async function procesoLlenarCard(contenedor, contenedorInfo, id_producto) {
    const producto = await obtenerDatosProducto(id_producto)

    llenarCard(contenedor, producto)
    llenarInformacion(contenedorInfo, producto)
}

async function obtenerDatosProducto(id_producto) {
    const response = await fetch('/obtenerUnProducto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_producto })
    })

    const producto = await response.json()
    return producto[0]
}

function llenarCard(contenedor, producto) {
    contenedor.innerHTML = `
        <img src="${producto.imagen_producto}" class="img_producto" id="contenedor_imagen">
        <div class="datos_producto">
            <h2 id="cargar_nombre">${producto.nombre_producto}</h2>
            <p id="cargar_precio">${producto.precio}</p>
        </div>
    `
}

function llenarInformacion(contenedor, producto) {
    contenedor.innerHTML = `
        <div class="informacion">
            <div style="margin-bottom: 1rem">${producto.descripcion_producto}</div>
            <div>Unidades disponibles: <span>${producto.cantidad}</span></div>
            <div>Categoría: ${producto.categoria}</div>
        </div>
    `
}

//--------------------------------------------------------------------------------------

export function mostrarBotonAñadirCarrito(contenedor) {
    contenedor.innerHTML += `
        <button class="btn_gestion" id="btn_add_cart">
            <div class="boton_contenedor">
                <h2>Agregar al carrito</h2>
                <div class="contenedor_img"> 
                    <img src="/images/header/carrito.png" alt="Imagen Redonda">
                </div>
            </div>
        </button>
    `
}

//--------------------------------------------------------------------------------------

export async function crearRegistroCarrito(id_usuario, id_producto, cantidad) {
    console.log(id_usuario, id_producto, cantidad)
    
    await fetch('/crearRegistroCarrito', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_usuario, id_producto, cantidad })
    })
}