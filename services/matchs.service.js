//calling batabase


const db = require("../Db/db");

//function that will return allMatch from table matchs

const getAllMatchService = () => {
  let qr_AllMatch = `select  id_match,equipes.nom_equipe AS equipe1,equipe2.nom_equipe as equipe2,horraire

    from (SELECT * from equipes)AS equipe2, matchs, equipes

     where matchs.id_equipe1=equipes.id_equipe AND matchs.id_equipe2=equipe2.id_equipe`;

  //query that will resolve(allMatch) or reject(err)

  return new Promise((resolve, reject) => {
    db.query(qr_AllMatch, (err, result) => {
      if (err) {
        reject(err);
      } else {
        console.log("service", result);

        resolve(result);
      }
    });
  });
};

//exporting services

module.exports = getAllMatchService;
