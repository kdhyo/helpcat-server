"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = void 0;

var isAuthenticated = function isAuthenticated(request) {
  if (!request.user) {
    throw Error("로그인을 해주시길 바랍니다.");
  }

  return request.user;
};

exports.isAuthenticated = isAuthenticated;