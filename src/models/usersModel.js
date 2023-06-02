const dbpool = require('../config/database');

const createUser = (values, callback) => {
    const SQLQuery =
        'INSERT INTO users (`id`,`nama`,`golongan`,`jenis_kelamin`,`tanggal_lahir`,`no_whatsapp`,`alamat`,`email`,`password`) VALUES (?)';
    dbpool.query(SQLQuery, [values], callback);
};

const getUserByEmail = (email, callback) => {
    const SQLQuery = 'SELECT * FROM users WHERE email = ?';
    dbpool.query(SQLQuery, [email], callback);
};

module.exports = { createUser, getUserByEmail };
