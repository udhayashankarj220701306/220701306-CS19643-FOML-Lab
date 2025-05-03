import mongoose from "mongoose";

const completeWorkoutSchema = new mongoose.Schema(
    {
        classes: {
            type: [
                {
                    equipmentName: {
                        type: String,
                    },    
                    workoutName: {
                        type: String,
                    },
                    noOfSets: {
                        type: Number,
                        default: 1,
                    },
                    givenReps: {
                        type: [Number],
                    },
                    doneReps: {
                        type: [Number],
                    },
                    givenWeights: {
                        type: [Number],
                    },
                    doneWeights: {
                        type: [Number],
                    },
                }
            ],
            ref: "Class",
        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        day: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);
const CompleteWorkout = mongoose.model("CompleteWorkout",completeWorkoutSchema);

export default CompleteWorkout;