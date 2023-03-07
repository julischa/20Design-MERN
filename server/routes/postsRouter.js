import express from "express";
import { getAllPosts } from "../controller/postController.js";

const postsRouter = express.Router();

postsRouter.get("/all", getAllPosts);

export default postsRouter;
