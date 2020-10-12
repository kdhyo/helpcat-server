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
    giveService: function () {
      var _giveService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, request, prisma, isAuthenticated, user, check, updateService;
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
                check = _context.sent;

                if (!check.ansUserId) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", new Error("이미 진행중인 서비스 입니다."));

              case 9:
                _context.next = 11;
                return prisma.service.update({
                  where: {
                    id: id
                  },
                  data: {
                    ansUser: {
                      connect: {
                        id: user.id
                      }
                    }
                  }
                });

              case 11:
                updateService = _context.sent;
                console.log(updateService);
                _context.next = 15;
                return prisma.room.create({
                  data: {
                    useronroom: {
                      create: [{
                        user: {
                          connect: {
                            id: updateService.reqUserId
                          }
                        },
                        service: {
                          connect: {
                            id: id
                          }
                        }
                      }, {
                        user: {
                          connect: {
                            id: updateService.ansUserId
                          }
                        },
                        service: {
                          connect: {
                            id: id
                          }
                        }
                      }]
                    }
                  }
                });

              case 15:
                return _context.abrupt("return", updateService);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", new Error(_context.t0));

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 18]]);
      }));

      function giveService(_x, _x2, _x3) {
        return _giveService.apply(this, arguments);
      }

      return giveService;
    }()
  }
};
exports["default"] = _default;