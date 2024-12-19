import { Router } from "express"
import connection from "../../connection.js"

const detailLoader = Router()

detailLoader.post('/crearRegistrosDetalle', async (req, res) => {
    const id_pedido = req.body.id_pedido
    const id_producto = req.body.id_producto
    const cantidad = req.body.cantidad
    const subtotal = req.body.subtotal

    try {
        await connection.execute('INSERT INTO detalle_pedido(id_pedido, id_producto, cantidad, subtotal) VALUES(?, ?, ?, ?)', [id_pedido, id_producto, cantidad, subtotal])

        return res.send(console.log('Registro del pedido realizado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al crear pedido'))
    }
})

detailLoader.post('/actualizarTotal', async (req, res) => {
    const id_pedido = req.body.id_pedido
    const total = req.body.total

    try {
        await connection.execute('UPDATE pedido SET total = ? WHERE id_pedido = ?', [total, id_pedido])

        return res.send(console.log('Total actualizado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al actualizar el total del pedido'))
    }
})

detailLoader.post('/obtenerRegistrosConPedido', async (req, res) => {
    const id_pedido = req.body.id_pedido

    try {
        const response = await connection.execute('SELECT * FROM detalle_pedido WHERE id_pedido = ?', [id_pedido])

        return res.json(response.rows)
    } catch (error) {
        return res.send(console.log('Error al obtener los detalles del pedido'))
    }
})

export default detailLoader