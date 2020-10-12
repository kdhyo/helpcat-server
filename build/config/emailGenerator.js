"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function sendWelcomeEmail(_x, _x2) {
  return _sendWelcomeEmail.apply(this, arguments);
}

function _sendWelcomeEmail() {
  _sendWelcomeEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(email, validateEmailToken) {
    var mailer, mailOptions;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mailer = _nodemailer["default"].createTransport({
              service: "Gmail",
              auth: {
                user: process.env.USER_MAIL,
                pass: process.env.PWD_MAIL
              }
            });
            mailOptions = {
              to: email,
              // 받는 사람 이메일
              from: process.env.USER_MAIL,
              // 보내는 사람 이메일
              subject: "HELP CAT 이메일 인증",
              html: "\n      <div>\uC548\uB155\uD558\uC138\uC694!!</div><br>\n      <div>HelpCat \uD68C\uC6D0\uC778\uC99D \uBA54\uC77C\uC785\uB2C8\uB2E4.</div>\n      <div>\uC774\uBA54\uC77C \uC778\uC99D\uC744 \uC6D0\uD558\uC2DC\uBA74 \uC544\uB798 \uBB38\uC790\uB97C \uD648\uD398\uC774\uC9C0\uC5D0 \uC801\uC5B4\uC8FC\uC2DC\uAE38 \uBC14\uB78D\uB2C8\uB2E4.</div><br>\n      <h1>".concat(validateEmailToken, "</h1>\n    ")
            };
            return _context.abrupt("return", mailer.sendMail(mailOptions));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendWelcomeEmail.apply(this, arguments);
}

module.exports = {
  sendWelcomeEmail: sendWelcomeEmail
};