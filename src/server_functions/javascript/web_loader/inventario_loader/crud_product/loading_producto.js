export async function procesoLlenarCard(contenedor, id_producto) {
    const producto = await obtenerDatosProducto(id_producto)

    llenarCard(contenedor, producto)
    return producto
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

export async function procesoEditarProducto(id_producto, nombre_producto, imagen_producto, descripcion_producto, precio, categoria, cantidad) {
    const response = await fetch('/editarProducto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_producto, nombre_producto, imagen_producto, descripcion_producto, precio, categoria, cantidad })
    })
}