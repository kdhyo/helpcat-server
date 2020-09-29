import nodemailer from "nodemailer";

async function sendWelcomeEmail(email, validateEmailToken) {
  const mailer = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PWD_MAIL,
    },
  });

  const mailOptions = {
    to: email, // 받는 사람 이메일
    from: process.env.USER_MAIL, // 보내는 사람 이메일
    subject: "HELP CAT 이메일 인증",
    html: `
      <div>안녕하세요!!</div><br>
      <div>HelpCat 회원인증 메일입니다.</div>
      <div>이메일 인증을 원하시면 아래 문자를 홈페이지에 적어주시길 바랍니다.</div><br>
      <h1>${validateEmailToken}</h1>
    `,
  };
  return mailer.sendMail(mailOptions);
}

module.exports = { sendWelcomeEmail };
