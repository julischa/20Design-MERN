import express from "express";
import {
  getAllUsers,
  imageUpload,
  signup,
} from "../controller/userController.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/signup", signup);
router.post("/imageUpload", multerUpload.single("image"), imageUpload);

export default router;
