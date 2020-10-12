"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _default = {
  Mutation: {
    login: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var prisma, email, password, user, pwdCheck, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prisma = _ref.prisma;
                email = args.email, password = args.password;
                _context.next = 4;
                return prisma.user.findOne({
                  where: {
                    email: email
                  }
                });

              case 4:
                user = _context.sent;

                if (user) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", new Error("아이디가 존재하지 않습니다."));

              case 7:
                _context.next = 9;
                return _bcryptjs["default"].compare(password, user.password);

              case 9:
                pwdCheck = _context.sent;

                if (pwdCheck) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", new Error("비밀번호가 올바르지 않습니다."));

              case 12:
                token = _jsonwebtoken["default"].sign({
                  userId: user.id
                }, process.env.JWT_SECRET, {
                  expiresIn: "1 days"
                });
                return _context.abrupt("return", {
                  token: token,
                  user: user
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x, _x2, _x3) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }
};
exports["default"] = _default;