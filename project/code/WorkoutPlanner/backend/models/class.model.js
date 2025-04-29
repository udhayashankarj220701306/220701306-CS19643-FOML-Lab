import mongoose from "mongoose";

const classSchema = new mongoose.Schema(
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
        // isDropSet: {
        //     type:Boolean,
        //     default:false,
        // },
        // dropSetWeights: {
        //     type: [Number],
        // },
        // isSuperSet: {
        //     type:Boolean,
        //     default:false,
        // },
        // superClass: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Class",
        // },
    },
    {
        timestamps: true,
    }
);
const Class = mongoose.model("Class",classSchema);

export default Class;