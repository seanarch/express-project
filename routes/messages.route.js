const express = require("express");

const messagesController = require("../controllers/messages.controller");

const messageRouter = express.Router();

messageRouter.get("/", messagesController.getMessages);

module.exports = messageRouter;
