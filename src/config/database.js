const mysql = require('mysql2');

const dbpool = mysql.createPool({
  socketPath: process.env.SQL_SOCKET,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = dbpool.promise();