import mongoose from "mongoose";

const completeWorkoutSchema = new mongoose.Schema(
    {
        classes: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Class",
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        date: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);
const CompleteWorkout = mongoose.model("CompleteWorkout",completeWorkoutSchema);

export default CompleteWorkout;