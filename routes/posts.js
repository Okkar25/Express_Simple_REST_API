import express from "express";
import { getPost, getPosts } from "../controllers/postController";

const router = express.Router();

// GET All Posts
router.get("/", getPosts);

// GET Single Post
router.get("/:id", getPost);

// Create new post

// Update Post

// Delete Post

export default router;
