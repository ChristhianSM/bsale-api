const { Router } = require('express');

const { getAll, getCategoryById } = require('../controllers/categories.controller');

const router = Router();

//  Obtener todas las categorias - publico
router.get( '/', getAll );

// Obtener una categoria por id - publico
router.get( '/:id', getCategoryById );

module.exports = router;