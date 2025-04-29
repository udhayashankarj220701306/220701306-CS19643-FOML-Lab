import CompleteWorkout from "../models/completeWorkout.model.js";

export const addCompleteWorkout = async (req, res) => {
    try {
        // const { name } = req.body;
        
        req.body.date = new Date(req.body.date);
        const completeWorkouts= await CompleteWorkout.create(req.body);
        res.status(201).json(completeWorkouts)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
export const showCompleteWorkouts = async (req, res) => {
    try {
        const completeWorkouts = await CompleteWorkout.find({});
        // const populatedcompleteWorkoutes = await Promise.all(classes.map(async (classs) => {
        //     return classs.populate([
        //         { path: 'equipmentId', model: 'Equipment' },
        //         { path: 'workoutId', model: 'Workout' }
        //       ]);
        // }))
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }   
}

export const showUserCompleteWorkouts = async (req, res) => {
    try {
        const completeWorkouts = await CompleteWorkout.find({userId: req.params.id});
        const populatedClasses = await Promise.all(completeWorkouts.map(async (completeWorkout) => {
            await completeWorkout.populate([
                { path: 'classes', model: 'Class' },
            ]);
            return completeWorkout;
        }))
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }   
}

export const showUseDateCompleteWorkouts = async (req, res) => {
    try {
        console.log(req.params.id,req.query.date);
        const query = { userId: req.params.id };
        const date = new Date(req.query.date);
        query.date = {
            $gte: new Date(date.setHours(0, 0, 0, 0)),
            $lte: new Date(date.setHours(23, 59, 59, 999)) 
        };
        

        const completeWorkouts = await CompleteWorkout.find(query);

        const populatedClasses = await Promise.all(
            completeWorkouts.map(async (completeWorkout) => {
                await completeWorkout.populate([
                    { path: 'classes', model: 'Class' },
                ]);
                return completeWorkout;
            })
        );
        console.log(populatedClasses);
        res.status(200).json(populatedClasses); // <- small fix: respond with populatedClasses!
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }   
};




export const deleteCompleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const completeWorkouts = await CompleteWorkout.findByIdAndDelete(id);
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}       

export const updateCompleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const completeWorkouts = await CompleteWorkout.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}