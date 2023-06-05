const dbpool = require ('../config/database');


const getViewAktifRequest = (id) => {
    const SQLQuery = `SELECT * FROM request_donor WHERE id_users = '${id}'`;
    return dbpool.execute(SQLQuery);
  };

module.exports = {getViewAktifRequest}
