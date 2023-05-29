const dbpool = require('../config/database');

const getUserById = (iduser) => {
    const SQLQuery = `SELECT * FROM users WHERE id = ${iduser}`;
    return dbpool.execute(SQLQuery);
};


const updateProfile = (body, iduser)=> {
    const SQLQuery = `UPDATE users SET 
                      nama= '${body.nama}', 
                      golongan= '${body.golongan}', 
                      jenis_kelamin= '${body.jenis_kelamin}',
                      tanggal_lahir= '${body.tanggal_lahir}',
                      no_whatsapp= '${body.no_whatsapp}',
                      alamat= '${body.alamat}',
                      email= '${body.email}',
                      password= '${body.password}'
                      WHERE id = ${iduser}`
    return dbpool.execute(SQLQuery);
}


module.exports = { getUserById, updateProfile };