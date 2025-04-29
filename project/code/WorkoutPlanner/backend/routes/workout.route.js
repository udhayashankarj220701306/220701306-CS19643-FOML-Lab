import express from "express";
import { addWorkout, showWorkouts, deleteWorkout, updateWorkout } from "../controllers/workout.controller.js";
const router = express.Router();

router.get("/", showWorkouts);    
router.post("/", addWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", updateWorkout);

export default router;