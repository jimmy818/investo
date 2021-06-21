const dotenv = require('dotenv').config();

// username: process.env.DB_USER,
// password: process.env.DB_PW,
const config = {
  db: {
    host: "remotemysql.com",
    database: 'EL6iXsvFkk',
    username: "EL6iXsvFkk",
    password: "bW1iMvQft1",
    dialect: 'mysql'
  },
  finnhubApiKey: "c36tc5aad3ib6g7eek80",
  twelvedataApiKey: "4a4434c650c84d99b4cb1ea20c2a6c09"
};
// twelvedataApiKey: process.env.TWELVEDATA_API_KEY
// finnhubApiKey: process.env.FINNHUB_API_KEY,

module.exports = config;