"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  Message: {
    fromTouser: function () {
      var _fromTouser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, __, _ref2) {
        var from, prisma;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = _ref.from;
                prisma = _ref2.prisma;
                _context.next = 4;
                return prisma.user.findOne({
                  where: {
                    id: from
                  }
                });

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fromTouser(_x, _x2, _x3) {
        return _fromTouser.apply(this, arguments);
      }

      return fromTouser;
    }(),
    toTouser: function () {
      var _toTouser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3, __, _ref4) {
        var to, prisma;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                to = _ref3.to;
                prisma = _ref4.prisma;
                _context2.next = 4;
                return prisma.user.findOne({
                  where: {
                    id: to
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

      function toTouser(_x4, _x5, _x6) {
        return _toTouser.apply(this, arguments);
      }

      return toTouser;
    }(),
    messageToroom: function () {
      var _messageToroom = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5, __, _ref6) {
        var room, prisma;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                room = _ref5.room;
                prisma = _ref6.prisma;
                _context3.next = 4;
                return prisma.room.findOne({
                  where: {
                    id: room
                  }
                });

              case 4:
                return _context3.abrupt("return", _context3.sent);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function messageToroom(_x7, _x8, _x9) {
        return _messageToroom.apply(this, arguments);
      }

      return messageToroom;
    }()
  }
};
exports["default"] = _default;