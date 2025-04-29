import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
    {
        name: {
			type: String,
			required: [true, "Name is required"],
		},
    },
	{
		timestamps: true,
	}
);

const Equipment = mongoose.model("Equipment",equipmentSchema);

export default Equipment;