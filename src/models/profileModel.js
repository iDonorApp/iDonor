const dbpool = require('../config/database');

const getUserById = (iduser) => {
    const SQLQuery = `SELECT * FROM users WHERE iduser = ${iduser}`;
    console.log('SQL Query:', SQLQuery);
    console.log('Parameters:', [iduser]);
    return dbpool.execute(SQLQuery);
};

const updateProfile = (body, iduser) => {
    const fieldsToUpdate = {
        nama: body.name,
        golongan: body.email,
        jenis_kelamin: body.jenis_kelamin,
        tanggal_lahir: body.tanggal_lahir,
        no_whatsapp: body.no_whatsapp,
        alamat: body.alamat,
        password: body.password,
    };

    const updateFields = Object.entries(fieldsToUpdate)
        .filter(([field, value]) => value !== undefined)
        .map(([field, value]) => `${field} = '${value}'`);

    const SQLQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE iduser = ${iduser}`;
    return dbpool.execute(SQLQuery);
};

module.exports = { getUserById, updateProfile };