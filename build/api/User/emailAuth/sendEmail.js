"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _emailGenerator = require("../../../config/emailGenerator");

var _default = {
  Mutation: {
    sendEmail: function () {
      var _sendEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var prisma, email, userCheck, validateEmailToken;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prisma = _ref.prisma;
                email = args.email;
                _context.prev = 2;
                _context.next = 5;
                return prisma.user.findOne({
                  where: {
                    email: email
                  }
                });

              case 5:
                userCheck = _context.sent;

                if (!userCheck) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", new Error("이미 존재하는 이메일입니다."));

              case 8:
                validateEmailToken = Math.random().toString(36).substr(2, 8);
                _context.next = 11;
                return (0, _emailGenerator.sendWelcomeEmail)(email, validateEmailToken);

              case 11:
                return _context.abrupt("return", validateEmailToken);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", _context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 14]]);
      }));

      function sendEmail(_x, _x2, _x3) {
        return _sendEmail.apply(this, arguments);
      }

      return sendEmail;
    }()
  }
};
exports["default"] = _default;