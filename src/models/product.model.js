const knex = require('knex');
const { config } = require('../database/config');

class Product {
  constructor() {
    this.nameTable = 'product';
    this.database = knex(config);
  }

  async getById(id) {
    try {
      if (!id || typeof id !== 'string') {
        throw Error('Id invalid');
      }
      let data = await this.database
        .from(this.nameTable)
        .select('*')
        .where('id', id);
      data = JSON.parse(JSON.stringify(data));
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAll() {
    try {
      let data = await this.database.from(this.nameTable).select('*');
      data = JSON.parse(JSON.stringify(data));
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getProductsByCategory(category) {
    try {
      if (!category || typeof category !== 'number') {
        throw Error('Category invalid');
      }
      let data = await this.database
        .from(this.nameTable)
        .select('*')
        .where('category', category);
      data = JSON.parse(JSON.stringify(data));
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getProductsByQuery(query) {
    try {
      if (!query || typeof query !== 'string') {
        throw Error('Category invalid');
      }
      let data = await this.database
        .from(this.nameTable)
        .select('*')
        .whereILike('name', `%${query}%`);
      data = JSON.parse(JSON.stringify(data));
      return data;
    } catch (error) {
      throw Error(error.message);
    }
  }

}

module.exports = Product;
