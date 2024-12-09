import { Router } from 'express';
import connection from '../../connection.js';

const productLoader = Router();

productLoader.get('/obtenerProductos', (req, res) => {
    connection.query('SELECT * FROM producto', (err, respuesta) => {
        if (err) {
            return res.send(console.log('Error al obtener productos'));
        }
        res.json(respuesta);
    });
});

productLoader.post('/obtenerUnProducto', (req, res) => {
    const id_producto = req.body.id_producto

    connection.query('SELECT * FROM producto WHERE id_producto = ?', [id_producto], (error, response) => {
        if ( error ) {
            return res.send(console.log('Error al leer tu publicacion'))
        } 
            
        res.json(response)
    })
})

export default productLoader;