const express = require('express');
const { getUserController, resumeReportController, getResumeReportController, GetHistory, changePassword, downloadPdf } = require('../controllers/user.controller');
const { auth } = require('../middlewares/auth');
const userRouter = express();

userRouter.get('/get-me',auth,getUserController);

userRouter.post('/resume/report',auth,resumeReportController);

userRouter.get('/get/resume/report/:id',getResumeReportController)

userRouter.get('/get/history',auth,GetHistory);

userRouter.put('/change/password',auth,changePassword);


module.exports = userRouter;