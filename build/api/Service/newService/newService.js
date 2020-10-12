"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  Subscription: {
    newService: {
      subscribe: function subscribe(_, __, _ref) {
        var pubsub = _ref.pubsub;
        return pubsub.asyncIterator("NEW_SERVICE");
      },
      resolve: function resolve(payload) {
        return payload;
      }
    }
  }
};
exports["default"] = _default;