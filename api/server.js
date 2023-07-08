const express = require("express");
const RecipesRouter = require("./recipes/recipes_router");
const server = express();
server.use("/api/recipes", RecipesRouter);
server.use(express.json());

module.exports = server;
