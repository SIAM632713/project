import express from 'express';
const router = express.Router();
import * as blogController from '../app/controllers/blogController.js';

router.post("/create-blog",blogController.createblog);
router.get("/read-blog",blogController.readblog);
router.put("/update-blog",blogController.updateblog);
router.delete("/delete-blog",blogController.deleteblog);


export default router;