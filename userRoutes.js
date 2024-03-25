const {
  setAvatar,
  register,
  login,
  getAllUsers,
} = require("../controllers/userControllers.js");
const authRouter = require("express").Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/setAvatar/:id", setAvatar);
authRouter.get("/allusers/:id", getAllUsers);

module.exports = authRouter;
