const dbpool = require ('../config/database');


const getviewall = ()=>{
    const SQLQuery = 'SELECT * FROM request_donor';
    return dbpool.execute(SQLQuery);
}

const getViewSpesific = (rumahsakit) => {
    const SQLQuery = `SELECT request_donor.*, RS.gmaps_link FROM request_donor JOIN RS ON request_donor.rumah_sakit = RS.rumah_sakit WHERE request_donor.rumah_sakit = '${rumahsakit}'`;
    return dbpool.execute(SQLQuery);
  };

module.exports = {getViewSpesific, getviewall}
