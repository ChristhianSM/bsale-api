const { request, response} = require("express")
const Product = require("../models/product.model");

const Producto = new Product();

const getAll = async (req = request, res = response) => {
  console.log("Entrooo")
  try {
    const products = await Producto.getAll();
    res.status(200).send({
      status: 200,
      data: {
        products,
      },
      message: 'product was added successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      messages: error.message,
    });
  }
}

const getProductById = async (req = request, res = response) => {
  const idProduct = req.params.id;
  try {
    const data = await Producto.getById(idProduct);
    res.status(200).send({
      status: 200,
      data,
      message: 'product was obtained successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      messages: error.message,
    });
  }
}

const getProductByCategory = async (req = request, res = response) => {
  const idCategory = parseInt(req.params.idCategory);
  try {
    const data = await Producto.getProductsByCategory(idCategory);
    res.status(200).send({
      status: 200,
      data,
      message: 'product was obtained successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      messages: error.message,
    });
  }
}

const getProductsByQuery = async (req = request, res = response) => {
  const { query } = req.body;
  try {
    const data = await Producto.getProductsByQuery(query);
    res.status(200).send({
      status: 200,
      data,
      message: 'product was obtained successfully',
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      messages: error.message,
    });
  }
}


module.exports = {
  getAll,
  getProductById,
  getProductByCategory,
  getProductsByQuery
}