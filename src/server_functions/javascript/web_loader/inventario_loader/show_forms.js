export function mostrarFormAñadir(contenedor) {
    contenedor.innerHTML = `
        <div class="contenedor_producto" id="contenedor_producto">
            <img src="/images/img_default.png" class="img_producto" id="contenedor_imagen">
            <div class="datos_producto">
                <h2 id="cargar_nombre">Nombre</h2>
                <p id="cargar_precio">Precio</p>
            </div>
        </div>    

        <div class="contenedor_formularios" >
            <div class="formulario_agregar" id="form_añadir">
                <form>
                    <input class="input required" type="text" placeholder="Nombre del producto" name="nombre" id="nombre">
                    <input class="input required" type="text" placeholder="Descripción del producto" name="descripcion" id="descripcion">
                    <label class="input required" for="file">Imagen del producto</label>
                    <input class="input required" type="text" placeholder="Precio del producto" name="precio" id="precio">
                    <input class="input required" type="text" placeholder="Categoria del producto" name="categoria" id="categoria">
                    <input class="input required" type="file" placeholder="Imagen del producto" style="display: none;" name="file" id="file">
                    <input class="input required" type="text" readonly name="imagen" style="display: none;" id="imagen">
    
                    <button class="boton" id="previsualizar">Previsualizar</button>
                    <input type="submit" value="Agregar Producto" id="btn_añadir" class="boton" style="display: none;">
                </form>
            </div>
        </div>
    `
}

export function mostrarFormEditar(contenedor, producto) {
    contenedor.innerHTML = `
        <div class="formulario_editar" id="form_editar">
            <form id="form_editar_">
                <input class="input required" type="text" placeholder="ID del producto" value="${producto.id_producto}" readonly>
                <input class="input required" type="text" placeholder="Nombre del producto" id="nombre" value="${producto.nombre_producto}">
                <input class="input required" type="text" placeholder="Descripción del producto" id="descripcion" value="${producto.descripcion_producto}">
                <label class="input required" for="file">Imagen del producto</label>
                <input class="input required" type="text" placeholder="Precio del producto" id="precio" value="${producto.precio}">
                <input class="input required" type="text" placeholder="Categoria del producto" id="categoria" value="${producto.categoria}">
                <input class="input required" type="text" placeholder="Cantidad del producto" id="cantidad" value="${producto.cantidad}">
                <input class="input required" type="file" placeholder="Imagen del producto" style="display: none;" id="file">

                <button class="boton" id="previsualizar" type="button">Previsualizar</button>
                <input type="submit" value="Editar Producto" id="agregar_editar" class="boton">
            </form> 
        </div>
    `
}