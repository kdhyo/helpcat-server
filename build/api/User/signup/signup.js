"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  Mutation: {
    signup: function () {
      var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var prisma, password, user, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                prisma = _ref.prisma;
                _context.next = 3;
                return _bcryptjs["default"].hash(args.password, 10);

              case 3:
                password = _context.sent;
                _context.prev = 4;
                _context.next = 7;
                return prisma.user.create({
                  data: _objectSpread(_objectSpread({}, args), {}, {
                    password: password
                  })
                });

              case 7:
                user = _context.sent;
                token = _jsonwebtoken["default"].sign({
                  userId: user.id
                }, process.env.JWT_SECRET, {
                  expiresIn: "1 days"
                });
                return _context.abrupt("return", {
                  token: token,
                  user: user
                });

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                return _context.abrupt("return", _context.t0);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 12]]);
      }));

      function signup(_x, _x2, _x3) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }()
  }
};
exports["default"] = _default;