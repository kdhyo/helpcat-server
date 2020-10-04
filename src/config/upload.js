import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import path from "path";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESSKEY,
  secretAccessKey: process.env.AWS_SSECRETKEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "helpcat",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      let originalname = path.extname(file.originalname);
      cb(null, Date.now().toString() + originalname);
    },
  }),
});

export const uploadMiddleware = upload.single("imgFile");

export const uploadController = (req, res) => {
  const {
    file: { location },
  } = req;
  res.json({ location });
};
