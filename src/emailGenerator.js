import nodemailer from "nodemailer";

async function sendWelcomeEmail(user, context) {
  const mailer = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.PWD_MAIL,
    },
  });

  const mailOptions = {
    to: user.email, // 받는 사람 이메일
    from: process.env.USER_MAIL, // 보내는 사람 이메일
    subject: "HELP CAT 이메일 인증",
    html: `
      <div>안녕하세요! ${user.userName}님</div><br>
      <div>HelpCat 회원인증 메일입니다.</div>
      <div>이메일 인증을 원하시면 아래 버튼을 클릭해주세요.</div><br>
      <a href="${context.request.headers.origin}/validateEmail?validateEmailToken=${user.validateEmailToken}">이메일인증</a>
    `,
  };
  return mailer.sendMail(mailOptions);
}

module.exports = { sendWelcomeEmail };
