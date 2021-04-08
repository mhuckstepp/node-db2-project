const express = require("express");

const carRouter = require("./cars/cars-router");

const server = express();
server.use(express.json());

server.use("/api", carRouter);

server.get("/", (req, res) => {
  res.status(200).json("API is up");
});

module.exports = server;
