const dbpool = require ('../config/database');

const getAllRequest = ()=>{
    const SQLQuery = 'SELECT rumah_sakit, COUNT(*) AS Dibutuhkan FROM request_donor GROUP BY rumah_sakit';
    return dbpool.execute(SQLQuery);
}

const getAllLink = ()=> {
    const SQLQuery = 'SELECT * FROM RS';
    return dbpool.execute(SQLQuery);
}

module.exports = {getAllRequest, getAllLink};
