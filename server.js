const express = require("express");

const server = express();

const actionsRouter = require("./actions/actionsRouter.js");
const projectRouter = require("./projects/projectRouter.js");

server.use(express.json());
// server.use(logger);
server.use("/actions", actionsRouter);
server.use("/projects", projectRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "Up and running" })
})



module.exports = server;