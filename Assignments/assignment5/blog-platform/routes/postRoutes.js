const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
  toggleLike,
  searchPosts, // 👈 ADD THIS
} = require("../controllers/postController");

const authMiddleware = require("../middlewares/authMiddleware");

// protected
router.post("/", authMiddleware, createPost);

// 👇 ADD THIS LINE HERE
router.put("/:id/like", authMiddleware, toggleLike);

router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);


// public
router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.get("/search", searchPosts);

module.exports = router;