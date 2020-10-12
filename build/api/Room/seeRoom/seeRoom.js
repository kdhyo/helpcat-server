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
    seeRoom: function () {
      var _seeRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var prisma, isAuthenticated, request, user, roomId, check;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prisma = _ref.prisma, isAuthenticated = _ref.isAuthenticated, request = _ref.request;
                user = isAuthenticated(request.res.req);
                roomId = args.roomId;
                _context.prev = 3;
                _context.next = 6;
                return prisma.useronroom.count({
                  where: {
                    AND: [{
                      room: {
                        id: roomId
                      },
                      user: {
                        id: user.id
                      }
                    }]
                  }
                });

              case 6:
                check = _context.sent;

                if (check) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", new Error("회원님께서 접속하실 수 없는 채팅방입니다."));

              case 9:
                _context.next = 11;
                return prisma.room.findOne({
                  where: {
                    id: roomId
                  }
                });

              case 11:
                return _context.abrupt("return", _context.sent);

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

      function seeRoom(_x, _x2, _x3) {
        return _seeRoom.apply(this, arguments);
      }

      return seeRoom;
    }()
  }
};
exports["default"] = _default;