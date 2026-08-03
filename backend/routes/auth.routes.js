const express = require('express');
const { registerController, loginController, logoutController, verifyOTP } = require('../controllers/auth.controller');
const { auth } = require('../middlewares/auth');
const authRouter = express.Router();

authRouter.post("/register",registerController);

authRouter.post("/login",loginController);

authRouter.put("/logout",auth,logoutController);


module.exports = authRouter;