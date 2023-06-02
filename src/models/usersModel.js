const dbpool = require('../config/database');

const createUser = (values, callback) => {
    const SQLQuery =
        'INSERT INTO users (`id`,`nama`,`golongan`,`jenis_kelamin`,`tanggal_lahir`,`no_whatsapp`,`alamat`,`email`,`password`) VALUES (?)';
    dbpool.query(SQLQuery, [values], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return callback(err, null);
        }
        return callback(null, result);
    });
};

const getUserByEmail = async (email) => {
    try {
        const SQLQuery = 'SELECT * FROM users WHERE email = ?';
        const result = await dbpool.query(SQLQuery, [email]);
        return result[0];
    } catch (err) {
        console.error('Error retrieving user data:', err);
        throw err;
    }
};

module.exports = { createUser, getUserByEmail };
