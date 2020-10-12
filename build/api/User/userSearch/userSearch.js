"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  Query: {
    userSearch: function () {
      var _userSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                prisma = _ref2.prisma;
                _context.prev = 2;
                _context.next = 5;
                return prisma.user.findOne({
                  where: {
                    id: id
                  }
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", _context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));

      function userSearch(_x, _x2, _x3) {
        return _userSearch.apply(this, arguments);
      }

      return userSearch;
    }()
  }
};
exports["default"] = _default;