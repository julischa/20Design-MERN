import express from "express";
import {
  getAllDesigners,
  getDesignersByName,
} from "../controller/designerController.js";

const router = express.Router();

router.get("/all", getAllDesigners);
router.get("/singleDesigner/:name", getDesignersByName);

export default router;
