import express from "express";
import { addCompleteWorkout, showUserDayCompleteWorkouts, showUserCompleteWorkouts, showCompleteWorkouts, deleteCompleteWorkout, updateCompleteWorkout } from "../controllers/completeworkout.controller.js";
const router = express.Router();    

router.get("/date/:id", showUserDayCompleteWorkouts);
router.get("/", showCompleteWorkouts);
router.get("/:id", showUserCompleteWorkouts);
router.post("/", addCompleteWorkout);
router.delete("/:id", deleteCompleteWorkout);
router.patch("/:id", updateCompleteWorkout);

export default router;