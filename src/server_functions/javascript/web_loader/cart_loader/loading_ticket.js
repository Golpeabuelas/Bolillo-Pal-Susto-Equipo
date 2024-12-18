export async function procesoCrearTicket(id_usuario) {
    //const id_pedido = await crearPedido(id_usuario)

    await procesoCrearDetallePedido(1, id_usuario)
    //HACER DETALLE PEDIDO
    //MODIFICAR TOTAL DEL PEDIDO
    //ELIMINAR TODOS LOS PRODUCTOS DEL CARRITO QUE YA SE COMPRARON
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
        
        await fetch('/', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_pedido, id_producto, cantidad, subtotal })
        })
    }
}