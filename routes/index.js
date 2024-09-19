const routes = require("express").Router();
const w01Contr = require("../controllers/w01");

routes.get("/", w01Contr.davidRoute);
routes.get("/tomi", w01Contr.tomiRoute);
routes.get("/tolu", w01Contr.toluRoute);

module.exports = routes;