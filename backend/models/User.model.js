const mongoose = require("mongoose");
const sendmail = require("../utils/mailTransporter");
const { string } = require("zod");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  profile:{
    type : String,
  }
});
//email subject message
userSchema.post("save", async function(doc){
    console.log("document ",doc);
    sendmail(doc.email,"your account is created","now you can anylse your resume",doc.name);
})


module.exports = mongoose.model("User",userSchema);
