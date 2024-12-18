import { Router } from "express"
import connection from "../../connection.js"

const ticketLoader = Router()

ticketLoader.post('/crearTicket', async (req, res) => {
    const id_usuario = req.body.id_usuario

    try {
        const respuesta = await connection.execute('INSERT INTO pedido(id_usuario, total) VALUES(?, ?)', [id_usuario, 0])

        return res.json(parseInt(respuesta.lastInsertRowid))
    } catch (error) {
        return res.send(console.log('Error al crear pedido'))
    }
})

ticketLoader.post('/actualizarTotal', async (req, res) => {
    const id_pedido = req.body.id_pedido
    const total = req.body.total

    try {
        await connection.execute('UPDATE pedido SET total = ? WHERE id_pedido = ?', [total, id_pedido])

        return res.send(console.log('Total actualizado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al actualizar el total del pedido'))
    }
})

export default ticketLoader