//importing express

const express = require("express");

const cors = require("cors");

//importing env config

require("dotenv").config();

//importing database

const db = require("./Db/db");

//creating express instance

const app = express();

app.use(express.json());

app.use(cors());

//Routes

//Route for joueur

const routeJoueur = require("./routes/joueurRoutes");

app.use("/api/v1/joueur", routeJoueur);

//route for match

const matchRoute = require("./routes/matchs.route");

app.use("/api/v1/matchs", matchRoute);

//route for equipe

const createequipeRouter = require("./Routes/routeequipe");

app.use("/api/v1/equipe", createequipeRouter);

//Declaring port

let port = process.env.port;
//Executing server

app.listen(port, () => {
  console.log(`Server running on port:  ${port}`);
});
