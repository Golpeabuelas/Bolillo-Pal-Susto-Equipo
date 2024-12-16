import { Router } from 'express';
import connection from '../../connection.js';

const productLoader = Router();

productLoader.get('/obtenerProductos', async (req, res) => {
    try {
        const response = await connection.execute('SELECT * FROM producto')

        return res.json(response.rows)
    } catch (error) {
        console.error('Error al obtener productos:', error);
        return res.send(console.log('Error al obtener productos'));
    }
});

productLoader.post('/obtenerUnProducto', async (req, res) => {
    const id_producto = req.body.id_producto

    try {
        const response = await connection.execute('SELECT * FROM producto WHERE id_producto = ?', [id_producto])

        return res.json(response.rows)
    } catch (error) {
        console.error('Error al obtener datos del producto:', error);
        return res.send(console.log('Error al obtener datos del producto'));
    }
})

export default productLoader;