import express from "express"
const router = express.Router();

import { AddBook, GetbyId, UpdateBooks, getallBooks, DeleteBook } from '../controller/bookCtrl';

router.post("/", AddBook);
router.put("/:id", UpdateBooks);
router.delete("/:id", DeleteBook);
router.get("/", getallBooks);
router.get("/:id", GetbyId);


export default router;