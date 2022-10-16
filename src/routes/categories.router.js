const { Router } = require('express');

const { obtenerCategorias,obtenerCategoria } = require('../controllers/categorias');

const router = Router();

//  Obtener todas las categorias - publico
router.get('/', obtenerCategorias );

// Obtener una categoria por id - publico
router.get('/:id', obtenerCategoria );

module.exports = router;