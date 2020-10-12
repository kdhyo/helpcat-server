"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  Mutation: {
    removeUser: function () {
      var _removeUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, __, _ref) {
        var request, isAuthenticated, prisma, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated, prisma = _ref.prisma;
                _context.prev = 1;
                user = isAuthenticated(request.res.req);
                _context.next = 5;
                return prisma.user["delete"]({
                  where: {
                    id: user.id
                  }
                });

              case 5:
                return _context.abrupt("return", true);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", _context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function removeUser(_x, _x2, _x3) {
        return _removeUser.apply(this, arguments);
      }

      return removeUser;
    }()
  }
};
exports["default"] = _default;