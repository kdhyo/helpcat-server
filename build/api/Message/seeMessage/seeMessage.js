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
    messages: function () {
      var _messages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var room, request, isAuthenticated, prisma;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                room = _ref.room;
                request = _ref2.request, isAuthenticated = _ref2.isAuthenticated, prisma = _ref2.prisma;
                isAuthenticated(request.res.req);
                _context.next = 5;
                return prisma.message.findMany({
                  where: {
                    room: room
                  }
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function messages(_x, _x2, _x3) {
        return _messages.apply(this, arguments);
      }

      return messages;
    }()
  }
};
exports["default"] = _default;