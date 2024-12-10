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

productos.post('/editarProducto', (req, res) => {
    const id = req.body.id_editar;
    const nombre = req.body.nombre_editar;
    const descripcion = req.body.descripcion_editar;
    const imagen = req.body.imagen_editar;
    const precio = req.body.precio_editar;
    const categoria = req.body.categoria_editar;

    connection.query('UPDATE producto SET nombre = ?, descripcion = ?, imagen = ?, precio = ?, categoria = ? WHERE id_producto = ?', [nombre, descripcion, imagen, precio, categoria, id], (error, response) => {
        if (error) {
            return res.send(console.log('Error al actualizar el producto'));
        }
    });
})

export default productos;