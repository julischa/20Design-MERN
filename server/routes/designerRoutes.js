import express from "express";
import {
  getAllDesigners,
  getDesignersByName,
} from "../controller/designerController.js";

const router = express.Router();

router.get("/all", getAllDesigners);
router.get("/singleDesigner/:name", getDesignersByName);
//Raul 1. create a new route (post route) to create a new designer, calling a function in the controller
//Raul 6. once it is working in postman, let's make it an authorized route (using the JWT token)

export default router;
