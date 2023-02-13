import express from "express";
import { getAllUsers } from "../controller/userController.js";

const router = express.Router();

router.get("/all", getAllUsers);

//create register/signup route, and import controller function

export default router;
