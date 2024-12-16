USE bolillo;

INSERT INTO producto(nombre_producto, descripcion_producto, imagen_producto, precio, categoria, cantidad) VALUES ('Concha', 'Concha de vainilla', 'https://corporativo.esperanza.mx/filemanager/9d548bfb-9fc0-4e1e-959c-dab756f43b1e.jpg', 11, 'Pan Dulce', 5);
INSERT INTO producto(nombre_producto, descripcion_producto, imagen_producto, precio, categoria, cantidad) VALUES ('Pay de queso', 'Pay que sabe a queso', 'https://corporativo.esperanza.mx/filemanager/fd317586-dff7-4fc7-bf4c-596e428641c1.jpg', 28, 'Pan Dulce', 6);
INSERT INTO producto(nombre_producto, descripcion_producto, imagen_producto, precio, categoria, cantidad) VALUES ('Muffin', 'Panecillo chabocho', 'https://corporativo.esperanza.mx/filemanager/eeb179d5-e45f-431c-916f-aa40ae1d240f.jpg', 18, 'Pan Dulce', 7);
INSERT INTO producto(nombre_producto, descripcion_producto, imagen_producto, precio, categoria, cantidad) VALUES ('Bigote', 'Hitler??', 'https://corporativo.esperanza.mx/filemanager/d16d1929-08bf-48c0-9a05-a987d4e07241.jpg', 11, 'Pan Dulce', 0);

SELECT * FROM producto;