import express from "express";
import { addCompleteWorkout, showUserDayCompleteWorkouts, showUserCompleteWorkouts, showCompleteWorkouts, deleteCompleteWorkout, updateCompleteWorkout, drop } from "../controllers/completeworkout.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();    

router.get("/date/:id", protectRoute,showUserDayCompleteWorkouts);
router.get("/", showCompleteWorkouts);
router.get("/:id", showUserCompleteWorkouts);
router.post("/", addCompleteWorkout);
router.delete("/drop",drop);
router.delete("/:id", deleteCompleteWorkout);
router.patch("/:id", updateCompleteWorkout);

export default router;