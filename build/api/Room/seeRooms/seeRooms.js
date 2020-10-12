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
    seeRooms: function () {
      var _seeRooms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, __, _ref) {
        var prisma, isAuthenticated, request, user, rooms;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prisma = _ref.prisma, isAuthenticated = _ref.isAuthenticated, request = _ref.request;
                user = isAuthenticated(request.res.req);
                _context.prev = 2;
                _context.next = 5;
                return prisma.room.findMany({
                  where: {
                    useronroom: {
                      some: {
                        user: {
                          id: user.id
                        }
                      }
                    }
                  }
                });

              case 5:
                rooms = _context.sent;

                if (rooms) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", new Error("채팅방 정보가 존재하지 않습니다."));

              case 8:
                console.log(rooms);
                return _context.abrupt("return", rooms);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", _context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12]]);
      }));

      function seeRooms(_x, _x2, _x3) {
        return _seeRooms.apply(this, arguments);
      }

      return seeRooms;
    }()
  }
};
exports["default"] = _default;