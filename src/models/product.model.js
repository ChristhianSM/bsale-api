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

}

module.exports = Product;
