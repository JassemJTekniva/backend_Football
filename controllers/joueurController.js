const getAllJoueursService = require("../services/serviceJoueur");

const getAllJoueursController = async (req, res) => {
  res.send(
    await getAllJoueursService()
      .then((response) => {
        //Retour du résultat

        return response;
      })

      .catch((err) => {
        //Affichage de l'erreur au console.

        console.log(`error: ${err}`);
      })
  );
};

module.exports = getAllJoueursController;
