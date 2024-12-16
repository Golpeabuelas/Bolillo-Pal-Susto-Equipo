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
    console.log(productos)
    for (let i = 0; i < productos.length; i++) {
        contenedor.innerHTML += ` 
            <div class="contenedor_producto" data-value="${productos[i].id_producto}">
                <img src="${productos[i].imagen_producto}" class="imagen_producto">
                
                <div class="contenedor_datos_producto">
                    <h2>${productos[i].nombre_producto}</h2>
                    <p>$${productos[i].precio}</p>
                </div>
            </div>
        ` 
    } 
}