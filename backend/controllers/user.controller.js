const { success } = require("zod");
const User = require("../models/User.model");
const fs = require("fs");
const pdf = require("pdf-parse");
const genrateInterviewReport  = require("../services/ai.service");
const interviewReportModel = require("../models/interview.report.model");
const bcrypt = require("bcrypt");

exports.getUserController = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "user details are fetch successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "there is an error on fetching user details",
      error: error.message,
    });
  }
};

exports.resumeReportController = async (req, res) => {
  try {
    const file = req.files.file;

    console.log("file : ", file);
    const { jobDescription, selfDescription, jobProfile } = req.body;

    const { id } = req.user;

    if (!jobDescription || !selfDescription) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }
    //parsing text from pdf file
    // const dataBuffer = fs.readFileSync(file.tempFilePath);
    const parse = new pdf.PDFParse({ url: file.tempFilePath });
    const resume = await parse.getText();

    const report = await genrateInterviewReport(
      resume.text,
      selfDescription,
      jobDescription,
    );

    const response = JSON.parse(report);

    console.log("response  : ", response);

    if (!response) {
      return res.status(422).josn({
        success: false,
        message:
          "not able to fetch response please try again later in some minute",
      });
    }

    console.log("Technical:", response["technicalQuestions"]);
    console.log("Behavioral:", response["behavioralQuestions"]);
    console.log("Skill Gap:", response["skillGap"]);
    console.log("Preparation:", response["preparationPlan"]);

    const saveData = await interviewReportModel.create({
      matchScore: response.matchScore,
      message: response.message,
      technicalQuestion: response.technicalQuestions,
      behavioralQuestion: response.behavioralQuestions,
      skillGap: response.skillGap,
      preparationPlan: response.preparationPlan,
      jobDescription,
      selfDescription,
      jobProfile: jobProfile,
      user: id,
    });

    res.status(200).json({
      success: true,
      message: "data saved successully",
      id: saveData._id,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
    console.log(err);
  }
};

exports.getResumeReportController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        message: "please search using id",
        success: false,
      });
    }

    const report = await interviewReportModel.findById(id).populate("user");

    if (!report) {
      return res.status(403).json({
        success: false,
        message: "Their is no report with this id",
      });
    }

    res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error in fetching report with the help of id",
    });
  }
};

exports.GetHistory = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) {
      return res.status(401).json({
        success: false,
        message: "User not exits please login again",
      });
    }
    const SearchHistory = await interviewReportModel.find({ user: id });

    res.status(200).json({
      success: true,
      message: "allhistory reports are fetched",
      response: SearchHistory,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error in getting history",
      error: error.message,
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { id } = req.user;

    const { password, newPassword, confirmNewPassword } = req.body;

    if (!password || !newPassword || !confirmNewPassword) {
      return res.status(400).json({
        success: false,
        message: "please fill all the details",
      });
    }

    if (newPassword === password) {
      return res.status(404).json({
        success: false,
        message: "Enter new password dont enter your previous password",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(404).json({
        success: false,
        message: "new password not equal to confirm password",
      });
    }

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Login is expired please login again",
      });
    }
    const user = await User.findById(id);
    console.log("user for change password : ", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not exists with this user id",
      });
    }

    const isPasswordEquals = await bcrypt.compare(password, user.password);

    if (isPasswordEquals) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await User.findByIdAndUpdate(id, {
        password: hashedPassword,
      });
      return res.status(201).json({
        sucess: true,
        message: "password updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "internal server error in change password handler",
      error: error.message,
    });
  }
};

