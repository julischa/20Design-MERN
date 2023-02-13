import express from "express";
import {
  getAllDesigners,
  getDesignersByName,
} from "../controller/designerController.js";

const router = express.Router();

router.get("/all", getAllDesigners);

//NOTE if we want to get Designers by name, we can use a URL parameter : creating a route with a dynamic field (/:NameOfOurURLParameter)
//NOTE 2. this route can also be used together with a query parameter ( /designerName?death=5690 , eg)
router.get("/:name", getDesignersByName);

// router.get("/", getDesignersByName);//NOTE if you want to create a route to be used only with query params ( /?birth=8799, e.g)

export default router;

//NOTE : to comment in/out : shift + command + 7
