const dbpool = require('../config/database');

const getUserById = (IDusers) => {
  const SQLQuery = `SELECT * FROM users WHERE id_users = '${IDusers}'`;
  return dbpool.execute(SQLQuery);
};

const updateProfile = (body, IDusers) => {
  let SQLQuery = `UPDATE users SET`;

  // Memeriksa dan menambahkan kolom yang akan diupdate ke SQLQuery
  if (body.nama) {
    SQLQuery += ` nama = '${body.nama}',`;
  }
  if (body.golongan) {
    SQLQuery += ` golongan = '${body.golongan}',`;
  }
  if (body.jenis_kelamin) {
    SQLQuery += ` jenis_kelamin = '${body.jenis_kelamin}',`;
  }
  if (body.tanggal_lahir) {
    SQLQuery += ` tanggal_lahir = '${body.tanggal_lahir}',`;
  }
  if (body.no_whatsapp) {
    SQLQuery += ` no_whatsapp = '${body.no_whatsapp}',`;
  }
  if (body.alamat) {
    SQLQuery += ` alamat = '${body.alamat}',`;
  }
  if (body.email) {
    SQLQuery += ` email = '${body.email}',`;
  }
  if (body.password) {
    SQLQuery += ` password = '${body.password}',`;
  }

  // Menghapus koma terakhir dari SQLQuery
  SQLQuery = SQLQuery.slice(0, -1);

  // Menambahkan WHERE clause untuk ID pengguna yang sesuai
  SQLQuery += ` WHERE id_users = '${IDusers}'`;

  return dbpool.execute(SQLQuery);
};

module.exports = { getUserById, updateProfile };
