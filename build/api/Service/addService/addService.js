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
    addService: function () {
      var _addService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_, args, _ref, info) {
        var request, prisma, pubsub, isAuthenticated, user, userId, title, contents, price, address1, address2, lat, lon, imgFiles, startAt, endAt, service;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                request = _ref.request, prisma = _ref.prisma, pubsub = _ref.pubsub, isAuthenticated = _ref.isAuthenticated;
                user = isAuthenticated(request.res.req);
                userId = user.id;
                title = args.title, contents = args.contents, price = args.price, address1 = args.address1, address2 = args.address2, lat = args.lat, lon = args.lon, imgFiles = args.imgFiles, startAt = args.startAt, endAt = args.endAt;
                _context2.prev = 4;
                _context2.next = 7;
                return prisma.service.create({
                  data: {
                    title: title,
                    contents: contents,
                    price: price,
                    address1: address1,
                    address2: address2,
                    lat: lat,
                    lon: lon,
                    startAt: startAt,
                    endAt: endAt,
                    reqUser: {
                      connect: {
                        id: userId
                      }
                    }
                  }
                });

              case 7:
                service = _context2.sent;

                // 이미지가 있을 시 이미지 저장
                if (imgFiles) {
                  imgFiles.forEach( /*#__PURE__*/function () {
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

                    return function (_x5) {
                      return _ref2.apply(this, arguments);
                    };
                  }());
                }

                pubsub.publish("NEW_SERVICE", service);
                return _context2.abrupt("return", true);

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                return _context2.abrupt("return", new Error(_context2.t0));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 13]]);
      }));

      function addService(_x, _x2, _x3, _x4) {
        return _addService.apply(this, arguments);
      }

      return addService;
    }()
  }
};
exports["default"] = _default;