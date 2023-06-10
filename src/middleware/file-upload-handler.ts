import multer from "multer";
import path from "path";

declare global {
  namespace Express {
    interface Request {
      product_image_name: any;
      support_doc_name: string;
    }
  }
}

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "product_image_name") {
      cb(null, path.join(__dirname, `../${process.env.IMAGE_LOCATION}`));
    }
    if (file.fieldname === "support_doc_name") {
      cb(null, path.join(__dirname, `../${process.env.DOC_LOCATION}`));
    }
  },
  filename: (req, file, cb) => {
    const indexOfSpace = file.originalname.indexOf(".");
    const fileName = `${Date.now()}.${file.originalname.substring(
      indexOfSpace + 1
    )}`;
    cb(null, fileName);
    if (file.fieldname === "product_image_name") {
      req.product_image_name = fileName;
    }
    if (file.fieldname === "support_doc_name") {
      req.support_doc_name = fileName;
    }
  },
});

export const uploaderFile = multer({
  storage: storage,
});
// limits: { fileSize: 2000000 },
