const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Blacklist = require("../models/TokenBlacklist.model");

require("dotenv").config();

exports.registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      return res.status(409).json({
        success: false,
        message: "user already exist with this email",
      });
    }
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    const saveUser = await User.create({
      name,
      email,
      password: hashedPassword,
      profile: `https://api.dicebear.com/9.x/adventurer/svg?seed=${name}`,
    });

    const payload = {
      email,
      id: saveUser._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({
      success: true,
      message: "account created successfully",
      user: { email },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "there is an error while signup",
      error: error.message,
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(404).json({
        success: false,
        message: "User does not exist with this email",
      });
    }
    console.log(findUser.password);

    const comparePassword = await bcrypt.compare(password, findUser.password);

    console.log(comparePassword);

    if (comparePassword) {
      const payload = {
        email,
        id: findUser._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "10d",
      });

      res.cookie("token", token, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.status(200).json({
        success: true,
        message: "login successfully",
        user: {
          name: findUser.name,
          email: findUser.email,
        },
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      messgae: "internal server error in login",
      error,
    });
  }
};

exports.logoutController = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (token) {
      await Blacklist.create({ token });
    }

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // or "none" if that's what you use
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "There was an error during logout",
      error: error.message,
    });
  }
};
