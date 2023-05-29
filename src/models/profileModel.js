const dbpool = require('../config/database');

const getUserById = (iduser) => {
    const SQLQuery = `SELECT * FROM users WHERE iduser = ${iduser}`;
    console.log('SQL Query:', SQLQuery);
    console.log('Parameters:', [iduser]);
    return dbpool.execute(SQLQuery);
};



module.exports = { getUserById };
