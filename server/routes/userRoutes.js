import express from "express";
import {
  getAllUsers,
  imageUpload,
  login,
  signup,
} from "../controller/userController.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/signup", signup);
// Create login route
router.post("/login", login);
// router.post("/imageUpload", multerUpload.single("file"), imageUpload);
router.post("/imageUpload", imageUpload);

export default router;
