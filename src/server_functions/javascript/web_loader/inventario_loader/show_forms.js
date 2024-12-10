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
            <form>
                <label class="text_top_button">ID del producto</label>
                <input class="input required" type="text" placeholder="ID del producto" value="${producto.id_producto}" readonly>
                
                <label class="text_top_button">Nombre del producto</label>
                <input class="input required" type="text" placeholder="Nombre del producto" id="nombre_producto" value="${producto.nombre_producto}">
                
                <label class="text_top_button">Descripción del producto</label>
                <input class="input required" type="text" placeholder="Descripción del producto" id="descripcion_producto" value="${producto.descripcion_producto}">
                
                <label class="text_top_button">Imagen del producto</label>
                
                <label class="input label" for="imagen_producto">Imagen del producto</label>
                <input class="input" type="file" placeholder="Imagen del producto" style="display: none;" id="imagen_producto">

                <label class="text_top_button">Precio del producto</label>
                <input class="input required" type="text" placeholder="Precio del producto" id="precio" value="${producto.precio}">
                
                <label class="text_top_button">Categoría del producto</label>
                <input class="input required" type="text" placeholder="Categoria del producto" id="categoria" value="${producto.categoria}">
                
                <label class="text_top_button">Cantidad del producto</label>
                <input class="input required" type="text" placeholder="Cantidad del producto" id="cantidad" value="${producto.cantidad}">
                
                <button class="boton" id="previsualizar" type="button">Previsualizar</button>
                <input type="submit" value="Editar Producto" id="submit_editar" class="boton">
            </form> 
        </div>
    `
}

export function mostrarFormBorrar(contenedor, producto) {
    contenedor.innerHTML = `
        <div class="formulario_borrar" id="form_borrar">
            <form>
                <input class="input required" type="text" placeholder="ID del producto" value="${producto.id_producto}" readonly>
                <input type="submit" value="Eliminar Producto" id="submit_borrar" class="boton">
            </form>
        </div>
    `
}