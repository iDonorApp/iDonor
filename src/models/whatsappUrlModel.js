const dbpool = require ('../config/database');

const getWhatsapp = ()=>{
    const SQLQuery = `SELECT * FROM request_donor WHERE rumah_sakit = '${rumahsakit}'`;
    return dbpool.execute(SQLQuery);
}

module.exports = {getWhatsapp}