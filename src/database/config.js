require('dotenv').config();

const config = {
  client: 'mysql',
  connection: {
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,
  },
  pool: { min: 0, max: 7 }
};
module.exports = { config };
