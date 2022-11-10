# Bsale Licoreria - API con express, Mysql y Knex

API, desarrollada usando Nodejs y Mysql con el objetivo de obtener los productos y las categorias de un ecommerce.

### Explicacion del proyecto
Se planteo construir una tienda virtual con productos que se encuentran alojados en una base de datos mysql para lo cual se contruyo esta REST API para gestionar los endpoints los cuales seran consumidos por los usuarios por parte del front, esta API cuenta con 3 enpoints los cuales son para obtener todos los productos, obtener todas las categorias, obtener todos los productos de acuerdo a una determinada categoria y obtener todos los productos de acuerdo a un termino de busqueda. Todos los endpoints devuelven la siguiente respuesta : 
```
Json
{
    "status": 200,
    "data": [],
    "message": "product was obtained successfully"
}
```
* status: El estado de la peticion, tiene 2 estados 200 y 500.
* data : Aqui se encuentra los datos para ser consumidos por el front.
* message: Mensaje para ser mostrado en el front.

### Documentación de la Api
* https://documenter.getpostman.com/view/13410793/2s847CxvZx

## Instalacion

```bash
  git clone https://github.com/ChristhianSM/bsale-api.git
```

Ir a la carpeta del proyecto

```bash
  cd bsale-api/
```

Abrir el proyecto el Visual Studio Code y cree el archivo .env (variables de entorno), en este proyecto se encuentra el archivo .env.example, donde se podra guiar de las variables necesarias para correr ejecutar el proyecto.

Instalar las dependencias

```bash
  npm install
```

Correr el servidor

```bash
  npm run start
```

Abrir un navegador web o puede usar Postman/Insonmia para realizar las peticiones: ```http://localhost:{port}/api/products```.

### Estructura del proyecto

    .
    ├── src
        ├── controllers     # Archivos que se encargan de manejar solicitudes entrantes, devuelven respuesta al cliente
        ├── database        # Archivos de configuracion DB
        ├── models          # Archivos que representan una entidad en la Base de datos
        ├── routes          # Archivo de rutas para los endpoints
    │   └── index.js
    ├── .env.example
    ├── .gitignore
    └── README.md

### 1. API

La API expone los siguientes endpoints:

#### `/api`

##### Obtener todos los productos
```
GET /api/products
```

Parámetros:

Este endpoint no contiene parámetros de momento.
Se espera que se incluya parametro de limit y offset para obtener productos por paginas y realizar paginacion.

Ejemplo de respuesta:
```json
{
  "status": 200,
  "data": {
    "products": [
      {
        "id": 5,
        "name": "ENERGETICA MR BIG",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
        "price": 1490,
        "discount": 20,
        "category": 1
      },
      {
        "id": 6,
        "name": "ENERGETICA RED BULL",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
        "price": 1490,
        "discount": 0,
        "category": 1
      },
      ...
    ]
  }
}
```

##### Obtener todas las categorias
```
GET /api/categories
```

Parámetros:

Este endpoint no contiene parámetros de momento.

Ejemplo de respuesta:
```json
{
    "status": 200,
    "data": {
        "categories": [
            {
                "id": 1,
                "name": "bebida energetica"
            },
            {
                "id": 2,
                "name": "pisco"
            },
            ...
        ]
    }
}
```

##### Obtener todos los productos de una determinada categoria
```
GET /api/products/category/<idCategory>
```

Parámetros:

Este endpoint no contiene parámetros de momento.
Se espera que se incluya parametro de limit y offset para obtener productos de acuerdo a la categoria por paginas y realizar paginacion.

Ejemplo de respuesta:
```json
{
    "status": 200,
    "data": [
        {
            "id": 5,
            "name": "ENERGETICA MR BIG",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price": 1490,
            "discount": 20,
            "category": 1
        },
        {
            "id": 6,
            "name": "ENERGETICA RED BULL",
            "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
            "price": 1490,
            "discount": 0,
            "category": 1
        },
        ...
    ]
}
```

##### Obtener todos los productos de acuerdo a un criterio de busqueda
* `POST /api/products`

Parámetros:

-  `query` - Filtra los resultados usando un termino de búsqueda.

Ejemplo de respuesta:
```json
{
    "status": 200,
    "data": [
        {
            "id": 98,
            "name": "Cerveza Escudo Normal LATA 350CC",
            "url_image": "",
            "price": 600,
            "discount": 0,
            "category": 6
        },
        {
            "id": 99,
            "name": "Cerveza Escudo Sin Filtrar LATA 350CC",
            "url_image": "",
            "price": 800,
            "discount": 0,
            "category": 6
        }
    ],
    "message": "product was obtained successfully"
}
```

## 2. Objetivos Logrados

Los objetivos que se lograron fueron adquirir experiencia con **Node.js**
como herramienta para desarrollar _aplicaciones de servidor_, junto con una
serie de herramientas comunes usadas en este tipo de contexto (Express como
framework, MySQL como base datos, y Knex como ORM).

### Node

* [ ] Instalar y usar modules
* [ ] `npm scripts`
* [ ] Variables de entorno

### Express

* [ ] Rutas
* [ ] `middlewares`

### HTTP

* [ ] Request
* [ ] Response
* [ ] Headers
* [ ] Body
* [ ] Verbos HTTP
* [ ] Codigos de status de HTTP
* [ ] Encodings y `JSON`
* [ ] CORS

### MySQL

* [ ] Instalación
* [ ] Conexión a través de cliente
* [ ] Connection string
* [ ] Comandos/Queries de creacion, lectura, modificación y eliminación

### Buenas prácticas de desarrollo

* [ ] Modularización
* [ ] Nomenclatura / Semántica
