"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = {
  User: {
    reqUser: function () {
      var _reqUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref, __, _ref2) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                prisma = _ref2.prisma;
                _context.next = 4;
                return prisma.service.findMany({
                  where: {
                    reqUserId: id
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

      function reqUser(_x, _x2, _x3) {
        return _reqUser.apply(this, arguments);
      }

      return reqUser;
    }(),
    ansUser: function () {
      var _ansUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref3, __, _ref4) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref3.id;
                prisma = _ref4.prisma;
                _context2.next = 4;
                return prisma.service.findMany({
                  where: {
                    ansUserId: id
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

      function ansUser(_x4, _x5, _x6) {
        return _ansUser.apply(this, arguments);
      }

      return ansUser;
    }(),
    rating_reqUser: function () {
      var _rating_reqUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref5, __, _ref6) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = _ref5.id;
                prisma = _ref6.prisma;
                _context3.next = 4;
                return prisma.rating.findMany({
                  where: {
                    reqUserId: id
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

      function rating_reqUser(_x7, _x8, _x9) {
        return _rating_reqUser.apply(this, arguments);
      }

      return rating_reqUser;
    }(),
    rating_ansUser: function () {
      var _rating_ansUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_ref7, __, _ref8) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = _ref7.id;
                prisma = _ref8.prisma;
                _context4.next = 4;
                return prisma.rating.findMany({
                  where: {
                    ansUserId: id
                  }
                });

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function rating_ansUser(_x10, _x11, _x12) {
        return _rating_ansUser.apply(this, arguments);
      }

      return rating_ansUser;
    }(),
    rating: function () {
      var _rating = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_ref9, __, _ref10) {
        var id, prisma;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _ref9.id;
                prisma = _ref10.prisma;
                _context5.next = 4;
                return prisma.rating.findMany({
                  where: {
                    OR: [{
                      ansUserId: id
                    }, {
                      reqUserId: id
                    }]
                  }
                });

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function rating(_x13, _x14, _x15) {
        return _rating.apply(this, arguments);
      }

      return rating;
    }()
  }
};
exports["default"] = _default;