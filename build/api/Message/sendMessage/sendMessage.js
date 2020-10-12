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
    sendMessage: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, args, _ref) {
        var request, isAuthenticated, prisma, pubsub, user, room, message, to, newMessage;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                request = _ref.request, isAuthenticated = _ref.isAuthenticated, prisma = _ref.prisma, pubsub = _ref.pubsub;
                user = isAuthenticated(request.res.req);
                room = args.room, message = args.message, to = args.to;
                _context.prev = 3;
                _context.next = 6;
                return prisma.message.create({
                  data: {
                    text: message,
                    fromTouser: {
                      connect: {
                        id: user.id
                      }
                    },
                    toTouser: {
                      connect: {
                        id: to
                      }
                    },
                    messageToroom: {
                      connect: {
                        id: room
                      }
                    }
                  }
                });

              case 6:
                newMessage = _context.sent;
                pubsub.publish("NEW_MESSAGE", {
                  roomId: room,
                  newMessage: newMessage
                }); // pubsub.publish(NEW_MESSAGE, {roomId:senderId < receiverId ? senderId + receiverId : receiverId + senderId, newMessage});

                return _context.abrupt("return", newMessage);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", _context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }));

      function sendMessage(_x, _x2, _x3) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }
};
exports["default"] = _default;