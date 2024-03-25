const {
  addMessage,
  getAllMessage,
} = require("../controllers/messagesControllers");
const messageRouter = require("express").Router();

messageRouter.post("/addmsg", addMessage);
messageRouter.post("/getmsg", getAllMessage);

module.exports = messageRouter;
