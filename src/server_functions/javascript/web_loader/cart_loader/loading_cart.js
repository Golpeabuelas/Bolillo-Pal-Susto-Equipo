export async function procesoMostrarCarrito(contenedor, id_usuario) {
    const registros = await obtenerRegistrosCarrito(id_usuario)

    await mostrarRegistrosCarrito(contenedor, registros)
}

async function obtenerRegistrosCarrito(id_usuario) {
    const response = await fetch('/obtenerCarritoConId', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ id_usuario })
    })

    const registros = await response.json()
    return registros
}

async function mostrarRegistrosCarrito(contenedor, registros) {
    for (let i = 0; i < registros.length; i++) {
        const producto = await obtenerUnProducto(registros[i].id_producto)
        contenedor.innerHTML += `
            <div class="producto">
                <img class="imagen_producto" src="${producto.imagen_producto}" alt="Producto 1">
                <div class="detalles_producto">
                    <h3 class="nombre_producto">${producto.nombre_producto}</h3>
                    <p class="descripcion_producto">${producto.descripcion_producto}</p>
                    <p class="precio_producto">$${producto.precio}</p>
                </div>

                <div class="ordenar"> 
                    <div class="alinear_button"><span class="textito">Incluir en la compra</span><button class="slider ${registros[i].agregar_pedido === 1 ? 'active' : ''}"></button></div>

                    <div class="acciones_producto">
                        <div class="producto_cantidad">
                            <button class="btn_cantidad menos" >-</button>
                            <input type="text" class="input_cantidad" value="${registros[i].cantidad}">
                            <button class="btn_cantidad mas" >+</button>
                        </div>
                        <div class="botones_acciones">
                            <button class="boton_accion" value="${producto.id_producto}">Eliminar</button>
                        </div>
                    </div>
                    </div>
            </div>
        `
    }

    contenedor.innerHTML += `
        <div class="hacer_pedido">
            <button class="btn_hacer_pedido" id="btn_hacer_pedido">Hacer Pedido</button>
        </div>
    `
}

async function obtenerUnProducto(id_producto) {
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

//-------------------------------------------------------------------------------------

export async function eliminarProductoCarrito(contenedor, id_usuario, id_producto) {
    await fetch('/eliminarProductoCarrito', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_usuario, id_producto })
    })

    contenedor.innerHTML = ''
    await procesoMostrarCarrito(contenedor, id_usuario)
}

//-------------------------------------------------------------------------------------

export async function cambiarCantidadBack(id_usuario, id_producto, cantidad) {
    await fetch('/editarCantidadRegistro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_usuario, id_producto, cantidad })
    })
}

//-------------------------------------------------------------------------------------

export async function añadirProductoPedido(id_usuario, id_producto, agregar_pedido) {
    await fetch('/editarEstatusPedido', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_usuario, id_producto, agregar_pedido })
    })
}
//-------------------------------------------------------------------------------------

export function cambiarCantidadFront(input, aumento, maximo) {
    if ( aumento === true && maximo > parseInt(input.value) ) {
        const auxiliar = parseInt(input.value) + 1
        input.value = auxiliar
    } else if ( aumento === true && maximo === parseInt(input.value) ) {
        input.setCustomValidity('La cantidad máxima permitida es' + maximo);
        input.reportValidity();
    } else if ( aumento === false && parseInt(input.value) > 1 ) {
        const auxiliar = parseInt(input.value) - 1
        input.value = auxiliar
    } 
}