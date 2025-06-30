import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

// GET All Posts
router.get("/", getPosts);

// GET Single Post
router.get("/:id", getPost);

// Create new post
router.post("/", createPost);

// Update Post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
