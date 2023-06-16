const dbpool = require ('../config/database');

const getAllRequest = ()=>{
    const SQLQuery = 'SELECT rumah_sakit, COUNT(*) AS dibutuhkan FROM request_donor GROUP BY rumah_sakit';
    return dbpool.execute(SQLQuery);
}

const getAllLink = ()=> {
    const SQLQuery = 'SELECT * FROM RS';
    return dbpool.execute(SQLQuery);
}

const getSearch = (search) => {
    const SQLQuery = `SELECT rumah_sakit, COUNT(*) AS dibutuhkan FROM request_donor WHERE rumah_sakit LIKE '%${search}%' GROUP BY rumah_sakit`;
    return dbpool.execute(SQLQuery);
  };
  
module.exports = {getAllRequest, getAllLink, getSearch};
