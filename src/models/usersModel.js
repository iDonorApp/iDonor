const dbpool = require ('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';
    return dbpool.execute(SQLQuery);
}

const createNewUser = (body)=> {
    const SQLQuery = `INSERT INTO users (
                        nama, 
                        golongan, 
                        jenis_kelamin, 
                        tanggal_lahir,
                        no_whatsapp,
                        alamat,
                        email,
                        password ) 
                     VALUES (
                        '${body.nama}',
                        '${body.golongan}',
                        '${body.jenis_kelamin}',
                        '${body.tanggal_lahir}',
                        '${body.no_whatsapp}',
                        '${body.alamat}',
                        '${body.email}',
                        '${body.password}')`;
    return dbpool.execute(SQLQuery);
}

const updateUser = (body, iduser)=> {
    const SQLQuery = `UPDATE users SET 
                      nama= '${body.name}', 
                      golongan= '${body.email}', 
                      jenis_kelamin= '${body.jenis_kelamin}',
                      tanggal_lahir= '${body.tanggal_lahir}',
                      no_whatsapp= '${body.no_whatsapp}',
                      alamat= '${body.alamat}',
                      email= '${body.email}',
                      password= '${body.password}'
                      WHERE id = ${iduser}`
    return dbpool.execute(SQLQuery);
}


const deleteUser = (iduser)=>{
    const SQLQuery = `DELETE FROM users WHERE id = ${iduser}`;
    return dbpool.execute(SQLQuery);
}
module.exports = {getAllUsers,createNewUser,updateUser, deleteUser}