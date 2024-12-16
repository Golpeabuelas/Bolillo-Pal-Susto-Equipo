import { Router } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = Router()

//-------------------------RUTAS-DE-CONEXION------------------------

router.get('/index', (req, res) => {
    res.sendFile(join(__dirname, '../public/modulos/index/index.html'))
});

router.get('/sign_in', (req, res) => {
    res.sendFile(join(__dirname, '../public/modulos/sesiones/sign_in/sign_in.html'))
});

router.get('/sign_up', (req, res) => {
    res.sendFile(join(__dirname, '../public/modulos/sesiones/sign_up/sign_up.html'))
});

router.get('/inventario', (req, res) => {
    res.sendFile(join(__dirname, '../public/modulos/inventario/inventario.html'));
});

router.get('/producto/:id', (req, res) => {
    res.sendFile(join(__dirname, '../public/modulos/inventario/funciones_inventario/crud_inventario.html'));
});

router.get('/carrito', (req, res) => {
    res.sendFile(join(__dirname, '../public/modulos/cart/cart.html'))
})

export default router;