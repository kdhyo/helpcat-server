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
    editService: function () {
      var _editService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, args, _ref) {
        var prisma, isAuthenticated, request, user, userId, id, title, contents, price, address1, address2, lat, lon, addImgs, removeImgs, startAt, endAt, service;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                prisma = _ref.prisma, isAuthenticated = _ref.isAuthenticated, request = _ref.request;
                user = isAuthenticated(request.res.req);
                userId = user.id;
                id = args.id, title = args.title, contents = args.contents, price = args.price, address1 = args.address1, address2 = args.address2, lat = args.lat, lon = args.lon, addImgs = args.addImgs, removeImgs = args.removeImgs, startAt = args.startAt, endAt = args.endAt;
                _context3.prev = 4;
                _context3.next = 7;
                return prisma.service.findOne({
                  where: {
                    id: id
                  }
                });

              case 7:
                service = _context3.sent;

                if (service) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", new Error("게시글이 존재하지 않습니다."));

              case 10:
                if (!(service.reqUserId === userId)) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 13;
                return prisma.service.update({
                  where: {
                    id: id
                  },
                  data: {
                    title: title,
                    contents: contents,
                    price: price,
                    address1: address1,
                    address2: address2,
                    lat: lat,
                    lon: lon,
                    startAt: startAt,
                    endAt: endAt
                  }
                });

              case 13:
                //추가할 이미지 있으면 추가
                if (addImgs) {
                  addImgs.forEach( /*#__PURE__*/function () {
                    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(imglink) {
                      return _regenerator["default"].wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return prisma.serviceimgfiles.create({
                                data: {
                                  service: {
                                    connect: {
                                      id: service.id
                                    }
                                  },
                                  imglink: imglink
                                }
                              });

                            case 2:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x4) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                } // 삭제할 이미지 있으면 삭제


                if (removeImgs) {
                  removeImgs.forEach( /*#__PURE__*/function () {
                    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(imglink) {
                      return _regenerator["default"].wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return prisma.serviceimgfiles["delete"]({
                                where: {
                                  imglink: imglink
                                }
                              });

                            case 2:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x5) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                }

                return _context3.abrupt("return", true);

              case 18:
                return _context3.abrupt("return", new Error("게시글 작성자가 아닙니다."));

              case 19:
                _context3.next = 24;
                break;

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](4);
                return _context3.abrupt("return", new Error(_context3.t0));

              case 24:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[4, 21]]);
      }));

      function editService(_x, _x2, _x3) {
        return _editService.apply(this, arguments);
      }

      return editService;
    }()
  }
};
exports["default"] = _default;