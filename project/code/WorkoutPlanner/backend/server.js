import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./libs/db.js";
import authRoutes from "./routes/auth.route.js"
import equipmentRoutes from "./routes/equipment.route.js"
import workoutRoutes from "./routes/workout.route.js"
import classRoutes from "./routes/class.route.js"
import completeWorkoutRoutes from "./routes/completeWorkout.route.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/workout",workoutRoutes);
app.use("/api/equipment",equipmentRoutes);
app.use("/api/class",classRoutes);
app.use("/api/completeWorkout",completeWorkoutRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on https://localhost:${PORT}`);
    connectDB();
})