const nodemailer = require("nodemailer");

require("dotenv").config();

function template(name){
    return `<div>
  <h2">Welcome ${name} 🎉</h2>
  <p>We are happy to have you with us.</p>
  <p>Your account was created successfully.</p>
  <p>Enjoy our services!</p>
  <br>
</div>`
}

const otpTemplate = (otp) => {
  return `
    <p>Your OTP is: <strong>${otp}</strong></p>
    <p>Valid for 1 minutes.</p>
  `;
};

async function sendmail(email, subject, message, name) {
  console.log(name, email, "name and email");
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    const sendmail = await transporter.sendMail({
      from: "Resume analyses",
      to: email,
      subject: subject,
      html: template(name),
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = sendmail;
