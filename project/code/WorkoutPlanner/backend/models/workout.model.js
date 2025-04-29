import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Workout Name is required"],
    },
    equipmentsId: {
        type:[mongoose.Schema.Types.ObjectId],
        ref:"Equipment",
    },
    },
    {
        timestamps: true,
    }
);
const Workout = mongoose.model("Workout",workoutSchema);

export default Workout;