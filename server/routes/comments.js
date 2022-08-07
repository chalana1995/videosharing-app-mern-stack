import express from 'express'
import { addComment, deleteComment, getComments } from '../controllers/comment.js';
import { verifyToken } from '../verifyToken.js';


const router = express.Router();


router.post("/", verifyToken, addComment)
router.get("/", getComments)
router.delete("/:videoId", verifyToken, deleteComment)



export default router;