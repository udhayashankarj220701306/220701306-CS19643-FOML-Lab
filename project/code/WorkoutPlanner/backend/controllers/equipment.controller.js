import Equipment from "../models/equipment.model.js";

export const addEquipment = async (req, res) => {
    try {
        const { name } = req.body;
        if(name == "") 
            return res.status(400).json({ message: "Name is required" });
        const equipment = await Equipment.create({ name });
        res.status(201).json({ equipment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const showEquipments = async (req, res) => {
    try {
        const equipments = await Equipment.find({});
        res.status(200).json({ equipments });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await Equipment.findByIdAndDelete(id);
        res.status(200).json({ equipment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if(name == "") 
            return res.status(400).json({ message: "Name is required" });
        const equipment = await Equipment.findByIdAndUpdate(id, { name }, { new: true });
        res.status(200).json({ equipment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const showWorkoutEquipments = async (req, res) => {
    try {
        const {equipmentsId} = req.body
        const equipments =await Promise.all(equipmentsId.map(async (id) => await Equipment.findById(id)));
        // console.log(equipments);
        res.status(200).json( equipments );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}