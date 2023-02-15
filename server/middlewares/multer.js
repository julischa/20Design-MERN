import multer from "multer";
import path from "path";

const multerUpload = multer({
  storage: multer.diskStorage({}),

  fileFilter: function fileFilter(req, file, cb) {
    let extension = path.extname(file.originalname);

    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    if (!allowedExtensions.includes(extension)) {
      cb(new Error("Wrong file format!"), false);
    }
    cb(null, true);
  },
});

export { multerUpload };
