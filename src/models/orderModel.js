const dbpool = require('../config/database');
 // Menghasilkan ID angka dengan panjang 10

 const createNewRequest = async (body) => {
    const { rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp } = body;
  
    const { customAlphabet } = await import('nanoid');
    const nanoid = customAlphabet('0123456789', 10); // Menghasilkan ID angka dengan panjang 10
  
    const id = nanoid();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${no_whatsapp}`;
  
    const SQLQuery = `INSERT INTO request_donor (id, rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp, whatsapp_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [id, rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp, whatsappUrl];
  
    return dbpool.execute(SQLQuery, values);
  };

// Test GET
const getRequestById = (id) => {
    const SQLQuery = `SELECT * FROM request_donor WHERE id = '${id}'`;
    return dbpool.execute(SQLQuery);
};

module.exports = { createNewRequest, getRequestById };