import { Router } from "express";
import connection from "../../connection.js"

const cartLoader = Router()

cartLoader.post('/obtenerCarritoConId', async (req, res) => {
    const id_usuario = req.body.id_usuario

    try {
        const response = await connection.execute('SELECT * FROM carrito WHERE id_usuario = ?', [id_usuario])

        return res.json( response.rows )
    } catch (error) {
        return res.send(console.log('Error al obtener los productos de tu carrito'))
    }
})

cartLoader.post('/crearFilaCarrito', async (req, res) => {
    const id_usuario = req.body.id_usuario
    const id_producto = req.body.id_producto
    const cantidad = req.body.cantidad

    try {
        const response = await connection.execute('INSERT INTO carrito(id_usuario, id_producto, cantidad) VALUES(?, ?, ?)', [id_usuario, id_producto, cantidad])

        return res.send(console.log('Producto agregado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al agregas los productos a tu carrito'))
    }
})

cartLoader.post('/eliminarCarritoUsuario', async (req, res) => {
    const id_usuario = req.id_usuario

    try {
        await connection.execute('DELETE * FROM carrito WHERE id_usuario = ?', [id_usuario])
    } catch (error) {
        return res.send(console.log('Error al eliminar el producto'))
    }
})

cartLoader.post('/eliminarProductoCarrito', async (req, res) => {
    const id_usuario = req.id_usuario
    const id_producto = req.id_producto

    try {
        await connection.execute('DELETE * FROM carrito WHERE id_usuario = ? AND id_producto = ?', [id_usuario, id_producto])
    } catch (error) {
        return res.send(console.log('Error al eliminar el producto', error))
    }
})