"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadController = exports.uploadMiddleware = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _path = _interopRequireDefault(require("path"));

var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.AWS_ACCESSKEY,
  secretAccessKey: process.env.AWS_SSECRETKEY,
  region: "ap-northeast-2"
});
var upload = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "helpcat",
    metadata: function metadata(req, file, cb) {
      cb(null, {
        fieldName: file.fieldname
      });
    },
    key: function key(req, file, cb) {
      var originalname = _path["default"].extname(file.originalname);

      cb(null, Date.now().toString() + originalname);
    }
  })
});
var uploadMiddleware = upload.single("imgFile");
exports.uploadMiddleware = uploadMiddleware;

var uploadController = function uploadController(req, res) {
  var location = req.file.location;
  res.json({
    location: location
  });
};

exports.uploadController = uploadController;