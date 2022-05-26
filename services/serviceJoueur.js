const db = require("../Db/db");

const getAllJoueursService = () => {
  let qr_getAllJoueurs = `select * from joueurs`;

  return new Promise((resolve, reject) => {
    db.query(qr_getAllJoueurs, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = getAllJoueursService;
