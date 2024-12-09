CREATE DATABASE IF NOT EXISTS Bolillo;

USE Bolillo;

CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    correo VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    permisos BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS producto (
    id_producto INT PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR(50) NOT NULL,
    imagen_producto MEDIUMTEXT NOT NULL,
    descripcion_producto TEXT NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    cantidad INT NOT NULL
);

CREATE TABLE IF NOT EXISTS carrito (
    id_usuario INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    PRIMARY KEY (id_usuario, id_producto),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS pedido (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    direccion_envio VARCHAR(255) NOT NULL,
    estado ENUM('pendiente', 'enviado', 'entregado', 'cancelado') NOT NULL DEFAULT 'pendiente',
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS detalle_pedido (
    id_detalle INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_producto INT NOT NULL,
    cantidad INT NOT NULL,
    subtotal DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE,
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto) 
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

DROP DATABASE bolillo