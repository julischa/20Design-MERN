import express from "express";
import { getAllUsers, signup } from "../controller/userController.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/signup", signup);

// router.get => only to retrieve information from our DB. We cann ONLY send information to the server (inside the request) in the URL
// router.post => to create new documents in oir DB . We can send information in the BODY of the request
// router.put => to modify all the fields of a document at once. We can send information in the BODY of the request
// router.patch => to modify some fields of a document. We can send information in the BODY of the request

export default router;
