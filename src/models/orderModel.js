const dbpool = require('../config/database');
const { v4: uuidv4 } = require('uuid');

const createNewRequest = (body) => {
    const { rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp } = body;
    const id = uuidv4();

    const SQLQuery = `INSERT INTO request_donor (id, rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [id, rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp];

    return dbpool.execute(SQLQuery, values);
};

// Test GET
const getRequestById = (id) => {
    const SQLQuery = `SELECT * FROM request_donor WHERE id = '${id}'`;
    return dbpool.execute(SQLQuery);
};

module.exports = { createNewRequest, getRequestById };