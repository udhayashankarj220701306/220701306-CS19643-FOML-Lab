import express from "express";
import { addEquipment, showEquipments, deleteEquipment,updateEquipment,showWorkoutEquipments } from "../controllers/equipment.controller.js";

const router = express.Router();

router.get("/", showEquipments);
router.get("/workout",showWorkoutEquipments);
router.post("/", addEquipment);
router.put("/:id", updateEquipment);
router.delete("/:id", deleteEquipment);



export default router;