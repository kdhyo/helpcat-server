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
    finishService: function () {
      var _finishService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, request, prisma, isAuthenticated, user, serviceData;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                request = _ref2.request, prisma = _ref2.prisma, isAuthenticated = _ref2.isAuthenticated;
                user = isAuthenticated(request.res.req);
                _context.prev = 3;
                _context.next = 6;
                return prisma.service.findOne({
                  where: {
                    id: id
                  }
                });

              case 6:
                serviceData = _context.sent;

                if (!(serviceData.reqUserId !== user.id)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", new Error("접근권한이 없습니다."));

              case 9:
                _context.next = 11;
                return prisma.service.update({
                  where: {
                    id: id
                  },
                  data: {
                    progress: true
                  }
                });

              case 11:
                return _context.abrupt("return", true);

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", _context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 14]]);
      }));

      function finishService(_x, _x2, _x3) {
        return _finishService.apply(this, arguments);
      }

      return finishService;
    }()
  }
};
exports["default"] = _default;