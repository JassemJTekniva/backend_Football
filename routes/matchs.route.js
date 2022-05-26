//calling controller

const getAllMatchController = require("../controllers/matchs.controller");

//calling module router from express

const matchRoute = require("express").Router();

//appling post methode to the route

matchRoute.get("/", getAllMatchController);

console.log("route match  !");

module.exports = matchRoute;
