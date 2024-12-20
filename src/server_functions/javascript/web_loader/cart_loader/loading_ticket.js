export async function procesoCrearTicket(id_usuario) {
    const id_pedido = await crearPedido(id_usuario)

    const registros = await procesoCrearDetallePedido(id_pedido, id_usuario)

    const total = await calcularTotal(id_pedido)
    
    await modificarTotal(id_pedido, total)

    await eliminarProductosCarrito(registros)
}

async function crearPedido(id_usuario) {
    const response = await fetch('/crearTicket', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ id_usuario })
    })

    const id_pedido = await response.json()
    return id_pedido
}

async function procesoCrearDetallePedido(id_pedido, id_usuario) {
    const registros = await obtenerRegistrosAgregados(id_usuario)

    const productos = await obtenerDatosProductos(registros)

    await agregarProductoAlPedido(id_pedido, productos, registros)
    return registros
}

async function obtenerRegistrosAgregados(id_usuario) {
    const response = await fetch('/obtenerProductosAgregados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_usuario })
    })

    const productos = await response.json()
    return productos
}

async function obtenerDatosProductos(registros) {
    const Productos = []

    for (let i = 0; i < registros.length; i++) {
        const id_producto = registros[i].id_producto
        const response = await fetch('/obtenerUnProducto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_producto })
        })
        
        const producto = await response.json()

        Productos.push(producto)
    }
    
    return Productos
}

async function agregarProductoAlPedido(id_pedido, productos, registros) {
    for(let i = 0; i < productos.length; i++) {
        const id_producto = registros[i].id_producto
        const cantidad = registros[i].cantidad
        const subtotal = parseInt(registros[i].cantidad) * parseInt(productos[i][0].precio)
        
        await fetch('/crearRegistrosDetalle', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_pedido, id_producto, cantidad, subtotal })
        })
    }
}


async function calcularTotal(id_pedido) {
    const response = await fetch('/obtenerRegistrosConPedido', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_pedido })
    })

    const total = response.json()
    const Total = calculoTotal(total) 
    return Total
}

function calculoTotal(total) {
    let Total = 0
    for (let i = 0; i < total.length; i++) {
        Total += total[i].subtotal
    }

    return Total
}

async function eliminarProductosCarrito(registros) {
    for (let i = 0; i < registros.length; i++) {
        const id_usuario = registros[i].id_usuario
        const id_producto = registros[i].id_producto

        await fetch('/eliminarProductoCarrito', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_usuario, id_producto })
        })
    }
}

async function modificarTotal(id_pedido, total) {
    await fetch('/actualizarTotal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_pedido, total })
    })
}