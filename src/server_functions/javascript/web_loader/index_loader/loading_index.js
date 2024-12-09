
export function mostrarGestionInventario(contenedor, permisos) {
    if ( permisos == true ) {
        contenedor.innerHTML += `
            <div class="contenedor_gestionar" id="contenedor_inventario">
                <a href="/inventario" class="item-navegacion enlace" style="margin-right: 1rem;">GESTIONAR INVENTARIO</a>
                <a href="/inventario"><img src="/images/header/croissant.png" class="icono_header"></a>
            </div>    
        `
    }
}

export async function procesoMostrarInventario(contenedor) {
    const productos = await obtenerProductos()

    mostrarProductos(contenedor, productos)
}

async function obtenerProductos() {
    const response = await fetch('/obtenerProductos')
    const productos = response.json()
    return productos
}

function mostrarProductos(contenedor, productos) {
    for (let i = 0; i < productos.length; i++) {
        if ( productos[i].cantidad > 0 ) {
            contenedor.innerHTML += ` 
                <div class="contenedor_producto">
                    <img src="${productos[i].imagen_producto}" class="imagen_producto">
                    
                    <div class="contenedor_datos_producto">
                        <h2>${productos[i].nombre_producto}</h2>
                        <p>$${productos[i].precio}</p>
                    </div>
                </div>
            ` 
        }
    } 
}
