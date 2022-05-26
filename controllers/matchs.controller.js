
//calling service

const getAllMatchService = require("../services/matchs.service");

//function that will use the service to return all matchs or error

const getAllMatchController = async (req, res) => {
  res.send(
    await getAllMatchService()
      .then((response) => {
        return response;
      })

      .catch((err) => console.log(`error, ${err} `))
  );

  console.log(" liste des match ");
};

module.exports = getAllMatchController;
