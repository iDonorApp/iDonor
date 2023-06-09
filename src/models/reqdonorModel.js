const dbpool = require ('../config/database');

const createNewRequest = async (body, IDusers) => {
  const { rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp } = body;
  const { customAlphabet } = await import('nanoid')
  const nanoid = customAlphabet('0123456789', 10); // Menghasilkan ID angka dengan panjang 10

  const id_request = nanoid();
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${no_whatsapp}`;

  const SQLQuery = `INSERT INTO request_donor (id_request, id_users, rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp, whatsapp_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)`;
  const values = [id_request, IDusers, rumah_sakit, nama, umur, golongan, no_kamar, no_whatsapp, whatsappUrl];

  return dbpool.execute(SQLQuery, values);
};

module.exports = { createNewRequest };
