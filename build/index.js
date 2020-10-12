"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _graphqlYoga = require("graphql-yoga");

var _client = require("@prisma/client");

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

require("./config/env");

var _passport = require("./config/passport");

var _schema = _interopRequireDefault(require("./config/schema"));

var _middlewares = require("./config/middlewares");

var _upload = require("./config/upload");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var port = process.env.PORT || 4000;
var prisma = new _client.PrismaClient();
var pubsub = new _graphqlYoga.PubSub();
var server = new _graphqlYoga.GraphQLServer({
  schema: _schema["default"],
  context: function context(request) {
    return _objectSpread(_objectSpread({}, request), {}, {
      prisma: prisma,
      isAuthenticated: _middlewares.isAuthenticated,
      pubsub: pubsub
    });
  }
});
var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
server.express.use((0, _cors["default"])(corsOptions));
server.express.use((0, _morgan["default"])("dev"));
server.express.use(_passport.authenticateJwt);
server.express.post("/api/upload", _upload.uploadMiddleware, _upload.uploadController);
server.start({
  port: port
}, function () {
  return console.log("\uD83D\uDE80 Server is running on localhost:".concat(port));
});