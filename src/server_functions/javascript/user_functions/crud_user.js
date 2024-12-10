import { Router } from "express";
import connection from "../../connection.js";

const sesiones = Router()

sesiones.post('/crearUsuario', async (req, res) => {
    const nombre = req.body.nombre
    const correo = req.body.correo
    const password = req.body.password
    const permisos = req.body.permisos

    try {
        await connection.execute('INSERT INTO usuario (nombre, correo, password, permisos) VALUES (?, ?, ?, ?)', [nombre, correo, password, permisos])

        console.log('Usuario agregado exitosamente')
        return res.json({ id_usuario: response.insertId, nombre: nombre, correo: correo, permisos: permisos })
    } catch (error) {
        console.error('Error al agregar usuario')
        return res.send(console.log('Error al agregar usuario'))
    }
})

sesiones.post('/editarUsuario', async (req, res) => {
    const id_usuario = req.body.id_usuario;
    const nombre = req.body.nombre;
    const password = req.body.password;
    const permisos = req.body.permisos;

    try {
        const response = await connection.execute(
            'UPDATE usuario SET nombre = ?, password = ?, permisos = ? WHERE id_usuario = ?', [nombre, password, permisos, id_usuario]);

        if (response.changes === 0) {
            return res.status(404).send("Usuario no encontrado");
        }

        console.log('Sesión actualizada exitosamente');
        res.json({ id_usuario: response.insertId, nombre: nombre, correo: correo, permisos: permisos });
    } catch (error) {
        console.error('Error al editar datos del usuario:', error);
        res.status(400).send("Error al editar datos del usuario");
    }
});


sesiones.post('/borrarUsuario', async (req, res) => {
    const id_usuario = req.body.id_usuario;

    try {
        const response = await connection.execute('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]);

        if (response.changes === 0) {
            return res.status(404).send("Usuario no encontrado");
        }

        console.log('Usuario eliminado exitosamente');
        res.send("Usuario eliminado exitosamente");
    } catch (error) {
        console.error('Error al eliminar la sesión:', error);
        res.status(400).send("Error al eliminar la sesión");
    }
});


export default sesiones 