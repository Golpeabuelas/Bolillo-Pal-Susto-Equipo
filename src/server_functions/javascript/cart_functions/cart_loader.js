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

cartLoader.post('/obtenerProductosAgregados', async (req, res) => {
    const id_usuario = req.body.id_usuario

    try {
        const response = await connection.execute('SELECT * FROM carrito WHERE id_usuario = ? AND agregar_pedido = 1', [id_usuario])

        return res.json( response.rows )
    } catch (error) {
        return res.send(console.log('Error al obtener los productos de tu carrito', error))
    }
})

cartLoader.post('/crearRegistroCarrito', async (req, res) => {
    const id_usuario = req.body.id_usuario
    const id_producto = req.body.id_producto
    const cantidad = req.body.cantidad

    try {
        await connection.execute('INSERT INTO carrito(id_usuario, id_producto, cantidad, agregar_pedido) VALUES(?, ?, ?, ?)', [id_usuario, id_producto, cantidad, 1])

        return res.send(console.log('Producto agregado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al agregar los productos al carrito', error))
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
    const id_usuario = req.body.id_usuario
    const id_producto = req.body.id_producto

    try {
        await connection.execute('DELETE FROM carrito WHERE id_usuario = ? AND id_producto = ?', [id_usuario, id_producto])

        return res.send(console.log('Producto eliminado del carrito'))
    } catch (error) {
        return res.send(console.log('Error al eliminar el producto', error))
    }
})

cartLoader.post('/editarCantidadRegistro', async (req, res) => {
    const id_usuario = req.body.id_usuario
    const id_producto = req.body.id_producto
    const cantidad = req.body.cantidad

    try {
        await connection.execute('UPDATE carrito SET cantidad = ? WHERE id_usuario = ? AND id_producto = ?', [cantidad, id_usuario, id_producto])

        return res.send(console.log('Cantidad modificada exitosamente'))
    } catch (error) {
        
    }
})

cartLoader.post('/editarEstatusPedido', async (req, res) => {
    const id_usuario = req.body.id_usuario
    const id_producto = req.body.id_producto
    const agregar_pedido = req.body.agregar_pedido

    try {
        await connection.execute('UPDATE carrito SET agregar_pedido = ? WHERE id_usuario = ? AND id_producto = ?', [agregar_pedido, id_usuario, id_producto])

        return res.send(console.log('Estatus actualizado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al actualizar el estatus', error))
    }
})

export default cartLoader