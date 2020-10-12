"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlYoga = require("graphql-yoga");

var _default = {
  Subscription: {
    newMessage: {
      subscribe: (0, _graphqlYoga.withFilter)(function (_, __, _ref) {
        var pubsub = _ref.pubsub;
        return pubsub.asyncIterator("NEW_MESSAGE");
      }, function (payload, args) {
        return payload.roomId === args.roomId;
      })
    }
  }
};
exports["default"] = _default;