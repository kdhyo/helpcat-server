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
    removeService: function () {
      var _removeService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, prisma, isAuthenticated, user, userId, id, service;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, prisma = _ref.prisma, isAuthenticated = _ref.isAuthenticated;
                user = isAuthenticated(request.res.req);
                userId = user.id;
                id = args.id;
                _context.prev = 4;
                _context.next = 7;
                return prisma.service.findOne({
                  where: {
                    id: id
                  }
                });

              case 7:
                service = _context.sent;

                if (service) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", new Error("게시글이 존재하지 않습니다."));

              case 10:
                if (!(service.reqUserId === userId)) {
                  _context.next = 16;
                  break;
                }

                _context.next = 13;
                return prisma.service["delete"]({
                  where: {
                    id: id
                  }
                });

              case 13:
                return _context.abrupt("return", true);

              case 16:
                return _context.abrupt("return", new Error("게시글 작성자가 아닙니다."));

              case 17:
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", new Error(_context.t0));

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 19]]);
      }));

      function removeService(_x, _x2, _x3) {
        return _removeService.apply(this, arguments);
      }

      return removeService;
    }()
  }
};
exports["default"] = _default;