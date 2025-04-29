import express from "express";
import { addClass, showClasses, deleteClass, updateClass } from "../controllers/class.controller.js";
const router = express.Router();    

router.get("/", showClasses);    
router.post("/", addClass);
router.delete("/:id", deleteClass);
router.patch("/:id", updateClass);

export default router;