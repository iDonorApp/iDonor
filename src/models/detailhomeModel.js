const dbpool = require ('../config/database');

// const getCountRequest = () => {
//     const SQLQuery = 'SELECT request_donor, COUNT(*) FROM request_donor GROUP BY rumah_sakit';
//     return dbpool.execute(SQLQuery);
// }

const getviewall = ()=>{
    const SQLQuery = 'SELECT * FROM request_donor';
    return dbpool.execute(SQLQuery);
}

const getViewSpesific = (rumahsakit)=>{
    const SQLQuery = `SELECT * FROM request_donor WHERE rumah_sakit = '${rumahsakit}'`;
    return dbpool.execute(SQLQuery);
}

module.exports = {getViewSpesific, getviewall}
