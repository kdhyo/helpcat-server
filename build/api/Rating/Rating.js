"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  Rating: {
    rating_reqUser: function () {
      var _rating_reqUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, __, _ref2) {
        var reqUserId, prisma;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reqUserId = _ref.reqUserId;
                prisma = _ref2.prisma;
                _context.next = 4;
                return prisma.user.findOne({
                  where: {
                    id: reqUserId
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

      function rating_reqUser(_x, _x2, _x3) {
        return _rating_reqUser.apply(this, arguments);
      }

      return rating_reqUser;
    }(),
    rating_ansUser: function () {
      var _rating_ansUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3, __, _ref4) {
        var ansUserId, prisma;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ansUserId = _ref3.ansUserId;
                prisma = _ref4.prisma;
                _context2.next = 4;
                return prisma.user.findOne({
                  where: {
                    id: ansUserId
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

      function rating_ansUser(_x4, _x5, _x6) {
        return _rating_ansUser.apply(this, arguments);
      }

      return rating_ansUser;
    }(),
    service: function () {
      var _service = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5, __, _ref6) {
        var serviceId, prisma;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                serviceId = _ref5.serviceId;
                prisma = _ref6.prisma;
                _context3.next = 4;
                return prisma.service.findOne({
                  where: {
                    id: serviceId
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

      function service(_x7, _x8, _x9) {
        return _service.apply(this, arguments);
      }

      return service;
    }()
  }
};
exports["default"] = _default;