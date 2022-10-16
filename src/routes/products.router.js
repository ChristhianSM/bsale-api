const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerProductos,
        obtenerProducto, } = require('../controllers/productos');

const router = Router();

//  Obtener todas las categorias - publico
router.get('/', obtenerProductos );

// Obtener una categoria por id - publico
router.get('/:id',[
    // check('id').custom( existeProductoPorId ),
    // validarCampos,
], obtenerProducto );

module.exports = router;