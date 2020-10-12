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
    addReview: function () {
      var _addReview = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, prisma, user, serviceId, review, rating, ratingSum, service, reqUserId, ansUserId, addRating, updateRating, ratingAvg;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated, prisma = _ref.prisma;
                user = isAuthenticated(request.res.req);
                serviceId = args.serviceId, review = args.review, rating = args.rating;
                ratingSum = 0;
                _context.prev = 4;
                _context.next = 7;
                return prisma.service.findOne({
                  where: {
                    id: serviceId
                  }
                });

              case 7:
                service = _context.sent;
                reqUserId = service.reqUserId, ansUserId = service.ansUserId;

                if (!(user.id !== reqUserId)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", new Error("의뢰자만 작성할 수 있습니다."));

              case 11:
                _context.next = 13;
                return prisma.rating.create({
                  data: {
                    review: review,
                    rating: rating,
                    rating_reqUser: {
                      connect: {
                        id: reqUserId
                      }
                    },
                    rating_ansUser: {
                      connect: {
                        id: ansUserId
                      }
                    },
                    service: {
                      connect: {
                        id: serviceId
                      }
                    }
                  }
                });

              case 13:
                addRating = _context.sent;
                _context.next = 16;
                return prisma.rating.findMany({
                  where: {
                    ansUserId: ansUserId
                  }
                });

              case 16:
                updateRating = _context.sent;

                /* 너 딱기다려 */
                updateRating.forEach(function (data) {
                  ratingSum += data.rating;
                }); // 평점 평균 구하기

                ratingAvg = ratingSum / updateRating.length;
                _context.next = 21;
                return prisma.user.update({
                  where: {
                    id: ansUserId
                  },
                  data: {
                    ratingAvg: ratingAvg,
                    ratingCount: updateRating.length
                  }
                });

              case 21:
                return _context.abrupt("return", addRating);

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", _context.t0);

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 24]]);
      }));

      function addReview(_x, _x2, _x3) {
        return _addReview.apply(this, arguments);
      }

      return addReview;
    }()
  }
};
exports["default"] = _default;