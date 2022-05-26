//module de paramétre de base de données
const db = require("../Db/db");

const GetallequipeService = () => {
  let req_Allequipe = `SELECT * FROM equipes`;
  const p = new Promise((resolve, reject) => {
    db.query(req_Allequipe, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return p
    .then((result) => {
      return result;
    })
    .catch((er) => {
      console.log(er);
    });
};
module.exports = GetallequipeService;
