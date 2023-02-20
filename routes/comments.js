import express from "express";
import CommentController from "../controller/comments.js";
import AuthClass from "../middleware/auth.js";
const commentController = new CommentController();
const router = express.Router();
const authClass = new AuthClass();

router.post("/", authClass.isAuth, commentController.createComment);

router.get("/", commentController.getAllComment);

router.put("/:commentId", authClass.isAuth, commentController.updateComment);

router.delete("/:commentId", authClass.isAuth, commentController.deleteComment);

export default router;
