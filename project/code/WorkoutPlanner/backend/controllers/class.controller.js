import Class from "../models/class.model.js";

export const addClass = async (req, res) => {
    try {
        // const { name } = req.body;
        const classs= await Class.create(req.body);
        res.status(201).json(classs)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
export const showClasses = async (req, res) => {
    try {
        const classes = await Class.find({});
        // const populatedClasses = await Promise.all(classes.map(async (classs) => {
        //     return classs.populate([
        //         { path: 'equipmentId', model: 'Equipment' },
        //         { path: 'workoutId', model: 'Workout' }
        //       ]);
        // }))
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }   
}

export const showUserClasses = async (req, res) => {
    try {
        const classes = await Class.find({userId: req.user._id});
        // const populatedClasses = await Promise.all(classes.map(async (classs) => {
        //     return classs.populate([
        //         { path: 'equipmentId', model: 'Equipment' },
        //         { path: 'workoutId', model: 'Workout' }
        //       ]);
        // }))
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }   
}



export const deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        const classs = await Class.findByIdAndDelete(id);
        res.status(200).json(classs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}       

export const updateClass = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body,id);
        const classs = await Class.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(classs);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
