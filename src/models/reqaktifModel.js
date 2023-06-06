const dbpool = require ('../config/database');


const getViewAktifRequest = (id_users) => {
    const SQLQuery = `SELECT * FROM request_donor WHERE id_users = '${id_users}'`;
    return dbpool.execute(SQLQuery);
  };

const deleteAkifRequest = (id_request)=>{
  const SQLQuery = `DELETE from request_donor WHERE id_request = ${id_request}`;
  return dbpool.execute(SQLQuery)
}  
module.exports = {getViewAktifRequest, deleteAkifRequest}
