import express from "express";
import { addCompleteWorkout, showUseDateCompleteWorkouts, showUserCompleteWorkouts, showCompleteWorkouts, deleteCompleteWorkout, updateCompleteWorkout } from "../controllers/completeworkout.controller.js";
const router = express.Router();    

router.get("/date/:id", showUseDateCompleteWorkouts);
router.get("/", showCompleteWorkouts);
router.get("/:id", showUserCompleteWorkouts);
router.post("/", addCompleteWorkout);
router.delete("/:id", deleteCompleteWorkout);
router.patch("/:id", updateCompleteWorkout);

export default router;