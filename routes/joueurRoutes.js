const getAllJoueursController = require("../controllers/joueurController");

const joueurRoutes = require("express").Router();

joueurRoutes.get("/", getAllJoueursController);

module.exports = joueurRoutes;
