const mongoose = require("mongoose");
const { string } = require("zod");

// jobdescription
// reume text
// self description

// texhinal questions
// behavioral questions
// skill gaps
// preparation plan

const technicalQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "technical question is required"],
  },
  intention: {
    type: String,
    required: [true, "intention is required"],
  },
  answer: {
    type: String,
    required: [true, "answer is required"],
  },
},
{ _id: false }
);

const behavioralQuestionSchema = new mongoose.Schema({
      question: {
    type: String,
    required: [true, "technical question is required"],
  },
  intention: {
    type: String,
    required: [true, "intention is required"],
  },
  answer: {
    type: String,
    required: [true, "answer is required"],
  },
},
{ _id: false }
);

const skillGapSchema = new mongoose.Schema({
    skill : {
        type : String,
        required : [true, "skill is required"],
    },
    severity: {
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
}
}, 
{ _id: false }
);

const preparationSchema = new mongoose.Schema(
  {
    day: {
      type: Number, // or String depending on AI response
      required: true,
    },
    focus: {
      type: String,
      required: true,
    },
    tasks: [
      {
        type: String,
      },
    ],
  },
  { _id: false }
);

const reportSchema = new mongoose.Schema({
    user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User",
  },
  jobDescription: {
    type: String,
    required: [true, "job description is required"],
  },
  resume: {
    type: String,
  },
  selfDescription: {
    type: String,
  },
  matchScore: {
    type: Number,
    min: 0,
    max: 100,
  },
  message : {
    type : string,
  },
  jobProfile : {
    type : string,
    required : true,
    trim : true,
  },
  technicalQuestion: [technicalQuestionSchema],
  behavioralQuestion : [behavioralQuestionSchema],
  preparationPlan : [preparationSchema],
  skillGap : [skillGapSchema],

},
{timestamps : true}
);

module.exports = mongoose.model("InterviewReport",reportSchema);