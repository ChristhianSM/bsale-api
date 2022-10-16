const { Router } = require('express');

const { getAll, getProductById } = require('../controllers/products.controller');

const router = Router();

//  Obtener todos los productos - publico
router.get('/', getAll );

// Obtener un producto por id - publico
router.get('/:id', getProductById );

module.exports = router;