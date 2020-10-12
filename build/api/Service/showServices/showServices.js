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
    showServices: function () {
      var _showServices = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var prisma, services;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prisma = _ref.prisma;
                _context.next = 3;
                return prisma.service.findMany({
                  orderBy: {
                    id: args.orderBy
                  }
                });

              case 3:
                services = _context.sent;
                return _context.abrupt("return", services);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function showServices(_x, _x2, _x3) {
        return _showServices.apply(this, arguments);
      }

      return showServices;
    }()
  }
};
exports["default"] = _default;