const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 5000;

        this.paths = {
            categories: '/api/categories',
            products:  '/api/products',
        }

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.paths.categories, require('../routes/categories.router'));
        this.app.use( this.paths.products, require('../routes/products.router'));
    }

    listen() {
        this.app.listen( this.port, () => {
          console.info(
            '\x1b[33m%s\x1b[0m', `>>> Server listening on port ${this.port} 🚀 : http://localhost:${this.port}/`
          );
        });
    }

}

module.exports = Server;
