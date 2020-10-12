"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  Query: {
    me: function me(_, __, _ref) {
      var request = _ref.request,
          isAuthenticated = _ref.isAuthenticated;
      var user = isAuthenticated(request.res.req);
      return user;
    }
  }
};
exports["default"] = _default;