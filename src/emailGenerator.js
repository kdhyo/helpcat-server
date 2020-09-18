import nodemailer from "nodemailer";
import config from "./config/config";

async function sendWelcomeEmail(user, context) {
  const mailer = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PWD_MAIL,
    },
  });

  const mailOptions = {
    to: user.email,
    from: config.userMail,
    subject: "HELP CAT 이메일 인증",
    html: `
      <div>hello ${user.name}</div>
      <div>Welcome in the HELP CAT.</div>
        <div>Please find link to validate your email.
           ${ctx.request.headers.origin}/validateEmail?validateEmailToken=${user.validateEmailToken}
        </div>
    `,
  };
  return mailer.sendMail(mailOptions);
}

module.exports = { sendWelcomeEmail };
