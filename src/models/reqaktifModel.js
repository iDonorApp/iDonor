const dbpool = require ('../config/database');


const getViewAktifRequest = (IDusers) => {
  const SQLQuery = `SELECT * FROM request_donor WHERE id_users = '${IDusers}'`;
  return dbpool.execute(SQLQuery);
};

const deleteAkifRequest = (id_request, IDusers) => {
  const SQLQuery = `DELETE FROM request_donor WHERE id_request = ${id_request} AND id_users = '${IDusers}'`;

  return dbpool.execute(SQLQuery);
};

module.exports = {getViewAktifRequest, deleteAkifRequest}
