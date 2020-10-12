"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  Room: {
    UserOnRoom: function () {
      var _UserOnRoom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, __, _ref2) {
        var id, prisma, users;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                prisma = _ref2.prisma;
                _context.next = 4;
                return prisma.useronroom.findMany({
                  where: {
                    roomId: id
                  }
                });

              case 4:
                users = _context.sent;
                return _context.abrupt("return", users);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function UserOnRoom(_x, _x2, _x3) {
        return _UserOnRoom.apply(this, arguments);
      }

      return UserOnRoom;
    }(),
    message: function () {
      var _message = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3, __, _ref4) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref3.id;
                prisma = _ref4.prisma;
                _context2.next = 4;
                return prisma.message.findMany({
                  where: {
                    room: id
                  }
                });

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function message(_x4, _x5, _x6) {
        return _message.apply(this, arguments);
      }

      return message;
    }()
  },
  UserOnRoom: {
    user: function () {
      var _user = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5, __, _ref6) {
        var userId, prisma;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = _ref5.userId;
                prisma = _ref6.prisma;
                console.log(userId);
                _context3.next = 5;
                return prisma.user.findMany({
                  where: {
                    id: userId
                  }
                });

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function user(_x7, _x8, _x9) {
        return _user.apply(this, arguments);
      }

      return user;
    }(),
    room: function () {
      var _room = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref7, __, _ref8) {
        var roomId, prisma;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                roomId = _ref7.roomId;
                prisma = _ref8.prisma;
                console.log(roomId);
                _context4.next = 5;
                return prisma.room.findOne({
                  where: {
                    id: roomId
                  }
                });

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function room(_x10, _x11, _x12) {
        return _room.apply(this, arguments);
      }

      return room;
    }(),
    service: function () {
      var _service = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref9, __, _ref10) {
        var serviceId, prisma;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                serviceId = _ref9.serviceId;
                prisma = _ref10.prisma;
                console.log(serviceId);
                _context5.next = 5;
                return prisma.service.findOne({
                  where: {
                    id: serviceId
                  }
                });

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function service(_x13, _x14, _x15) {
        return _service.apply(this, arguments);
      }

      return service;
    }()
  }
};
exports["default"] = _default;