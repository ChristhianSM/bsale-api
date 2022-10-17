const { Router } = require('express');

const { getAll, getProductById, getProductByCategory, getProductByQuery, getProductsByQuery } = require('../controllers/products.controller');

const router = Router();

//  Obtener todos los productos - publico
router.get('/', getAll );

// Obtener un producto por id - publico
router.get('/:id', getProductById );

// Obtener productos por categoria
router.get("/category/:idCategory", getProductByCategory)

// Obtener productos por query
router.post("/", getProductsByQuery)

module.exports = router;