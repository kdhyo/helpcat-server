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
    detailService: function () {
      var _detailService = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var serviceId, prisma, service, serviceImgFiles;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                serviceId = _ref.serviceId;
                prisma = _ref2.prisma;
                _context.prev = 2;
                _context.next = 5;
                return prisma.service.findOne({
                  where: {
                    id: serviceId
                  }
                });

              case 5:
                service = _context.sent;
                _context.next = 8;
                return prisma.serviceimgfiles.findMany({
                  where: {
                    serviceId: serviceId
                  }
                });

              case 8:
                serviceImgFiles = _context.sent;
                return _context.abrupt("return", {
                  service: service,
                  serviceImgFiles: serviceImgFiles
                });

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

      function detailService(_x, _x2, _x3) {
        return _detailService.apply(this, arguments);
      }

      return detailService;
    }()
  }
};
exports["default"] = _default;