import Workout from "../models/workout.model.js";

export const showWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({})
        const populatedWorkouts = await Promise.all(workouts.map(async (workout) => {
            return workout.populate("equipmentsId");
        }));
        res.status(200).json(populatedWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const addWorkout = async (req, res) => {
    try {
        const { name, equipmentsId } = req.body;
        const workout = await Workout.create({ name,equipmentsId });
        res.status(201).json({ workout });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const workout = await Workout.findByIdAndDelete(id);
        res.status(200).json({ workout });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const updateWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        // const { name,equipmentsId } = req.body;
        const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ workout });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};