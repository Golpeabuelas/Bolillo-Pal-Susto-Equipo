export async function procesoMostrarTicket(id_usuario) {
    const registros = await obtenerTickets(id_usuario)


}

async function obtenerTickets(id_usuario) {
    const response = await fetch('/obtenerTicket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_usuario })
    })

    const registros = await response.json()
    return registros
}

async function obtenerProductos(registros) {
    for (let i = 0; i < array.length; i++) {
        const id_pedido = registros[i].id_pedido
        
        const response = await fetch('obtenerRegistrosConPedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id_pedido })
        })
    }
}