import { Router } from 'express';
import connection from '../../connection.js';

const productos = Router();

productos.post('/agregarProducto', async (req, res) => {
    const nombre = req.body.nombre_producto;
    const descripcion = req.body.descripcion_producto;
    const imagen = req.body.imagen_producto;
    const precio = req.body.precio;
    const categoria = req.body.categoria;
    const cantidad = req.body.cantidad;

    try {
        await connection.execute('INSERT INTO producto(nombre_producto, imagen_producto, descripcion_producto, precio, categoria, cantidad) values (?, ?, ?, ?, ?, ?)', [nombre, descripcion, imagen, precio, categoria, cantidad])

        return res.send(console.log('Producto agregado correctamente'))
    } catch (error) {
        console.error('Error al agregar producto:', error)
        return res.send(console.log('Error al agregar producto'))
    }
});

productos.post('/borrarProducto', (req, res) => {
    const id = req.body.id_borrar;
    
    connection.query('DELETE FROM producto WHERE id_producto = ?', [id], (error, response) => {
        if (error) {
            console.error('Error al borrar el producto:', error);
            return res.send("Error al borrar el producto");
        } else if (resultado.affectedRows === 0) {
            return res.send("Producto no encontrado");
        } else {
            return res.send(console.log('borrado correctamente'))
        }
    });
});

productos.post('/editarProducto', async (req, res) => {
    const id_producto = req.body.id_producto
    const nombre_producto = req.body.nombre_producto
    const imagen_producto = req.body.imagen_producto
    const descripcion_producto = req.body.descripcion_producto
    const precio = req.body.precio
    const categoria = req.body.categoria
    const cantidad = req.body.cantidad

    try {
        await connection.execute('UPDATE producto SET nombre_producto = ?, imagen_producto = ?, descripcion_producto = ?, precio = ?, categoria = ? cantidad = ? WHERE id_producto = ?', [nombre_producto, imagen_producto, descripcion_producto, precio, categoria, cantidad, id_producto])

        return res.send(console.log('Producto editado exitosamente'))
    } catch (error) {
        return res.send(console.log('Error al actualizar el producto'));
    }
})

export default productos;