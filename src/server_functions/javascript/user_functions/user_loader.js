import { Router } from "express";
import connection from "../../connection.js";

const userLoader = Router()

userLoader.post('/buscarSesionExistente', async (req, res) => {
    const correo = req.body.correo;

    try {
        const resultado = await connection.execute('SELECT * FROM usuario WHERE correo = ?', [correo]);

        if (resultado.rows.length === 0) {
            return res.json({ correoDisponible: true });
        }

        return res.json({ correoDisponible: false });
    } catch (error) {
        console.error('Error al buscar sesión:', error);
        return res.status(400).send("Error al buscar sesión");
    }
});


userLoader.post('/otorgarPermisos', (req, res) => {
    const password = req.body.password

    if( password === 'b0l1ll0_4dm1n1str4d0r' ){
        return res.json({ permisos: true })
    }

    return res.json({ permisos: false })
})

userLoader.post('/iniciarSesion', async (req, res) => {
    const { correo, password } = req.body;

    try {
        const response = await connection.execute('SELECT * FROM usuario WHERE correo = ?', [correo]);

        if (response.rows.length === 0) {
            return res.json({ Correo: false, Acceso: false });
        }

        const usuario = response.rows[0];

        if (password === usuario.password) {
            return res.json({ Response: usuario, Acceso: true });
        }

        return res.json({ Acceso: false });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(400).json({ error: 'Error al iniciar sesión' });
    }
});


userLoader.post('/getUserID', (req, res) => {
    const correo = req.body.correo

    connection.query('SELECT * FROM usuario WHERE correo = ?', [correo], (error, response) => {
        if ( error ) {
            return res.status(400).send(console.log('Error al buscar la información del usuario', error))
        }

        if ( response.length === 0 ) {
            return res.status(404).send(console.log('Usuario no encontrado'))
        }

        return res.json({ id_usuario: response[0].id_usuario })
    })
})

userLoader.post('/getUserID', async (req, res) => {
    const { correo } = req.body;

    try {
        const response = await connection.execute('SELECT id_usuario FROM usuario WHERE correo = ?', [correo]);

        if (response.rows.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        return res.json({ id_usuario: response.rows[0].id_usuario });
    } catch (error) {
        console.error('Error al buscar la información del usuario:', error);
        return res.status(400).json({ error: 'Error al buscar la información del usuario' });
    }
});


export default userLoader