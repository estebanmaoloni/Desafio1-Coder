# Desafio-Coder


## Características principales

- Crear usuarios y productos fácilmente de forma asincrona y archivados en una carpeta de formato JSON.
- Uso de Fs y Crypyo
- Todas las creaciones tienen un ID aleatorio.
- Asignar condiciones estrictas para la creacion de usuarios y productos.
- Logs para mantener a los usuarios informados sobre sus usuarios y tareas creadas.
- Busqueda de productos y usuarios a travez de id, categoria y rol
- Eliminacion de usuarios y productos habilitada
- Realizacion de cambios en usuarios y productos habilitada
- Uso de routes para un codigo mas ordenado y facilitacion de lectura del codigo
- Manejo de errores y rutas no encontradas a traves de middlewares


## Instalación

Para instalar sigue estos pasos:

1. Clona el repositorio desde GitHub: `git clone https://github.com/estebanmaoloni/Desafio1-Coder.git`




# Visualizacion

- De ahora en mas las rutas deben ser visualizadas a traves de Postman

# Descarga de Postman

[https://www.postman.com/]

# Rutas
- http://localhost:8080/api/products
- http://localhost:8080/api/products/:pid
- http://localhost:8080/api/users
- http://localhost:8080/api/users:uid

# Datos a tener en cuenta

- Cuando se utilicen las rudas con [:uid] y [:pid] deben ser atribuidos los id en la seccion [Value] de los productos o usuarios 
que desea encontrar modificar o eliminar en la seccion [Params] de postman