"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _default = {
  Mutation: {
    editPwd: function () {
      var _editPwd = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var oldPwd, newPwd, request, isAuthenticated, prisma, user, oldPwdCheck, password;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                oldPwd = _ref.oldPwd, newPwd = _ref.newPwd;
                request = _ref2.request, isAuthenticated = _ref2.isAuthenticated, prisma = _ref2.prisma;
                _context.prev = 2;
                user = isAuthenticated(request.res.req);
                _context.next = 6;
                return _bcryptjs["default"].compare(oldPwd, user.password);

              case 6:
                oldPwdCheck = _context.sent;

                if (oldPwdCheck) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", new Error("패스워드가 일치하지 않습니다."));

              case 9:
                _context.next = 11;
                return _bcryptjs["default"].hash(newPwd, 10);

              case 11:
                password = _context.sent;
                _context.next = 14;
                return prisma.user.update({
                  where: {
                    id: user.id
                  },
                  data: {
                    password: password
                  }
                });

              case 14:
                return _context.abrupt("return", true);

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", _context.t0);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 17]]);
      }));

      function editPwd(_x, _x2, _x3) {
        return _editPwd.apply(this, arguments);
      }

      return editPwd;
    }()
  }
};
exports["default"] = _default;