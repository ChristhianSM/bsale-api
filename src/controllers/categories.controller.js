const { request, response} = require("express");
const Category = require("../models/category.model");

const Categoria = new Category();

const getAll = async (req = request, res = response) => {
  try {
    const categories = await Categoria.getAll();
    res.status(200).send({
      status: 200,
      data: {
        categories,
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

const getCategoryById = async (req = request, res = response) => {
  const idProduct = req.params.id;
  try {
    const data = await Categoria.getById(idProduct);
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
  getCategoryById
}