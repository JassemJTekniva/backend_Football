const GetallequipeeController = require("../Controllers/controllerequipe");
  
  //Route equipe
  const createequipeRouter = require(`express`).Router();
  createequipeRouter.get('/', GetallequipeeController);
  
  module.exports = createequipeRouter;
  