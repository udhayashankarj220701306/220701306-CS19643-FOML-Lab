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

export const showUserDayCompleteWorkouts = async (req, res) => {
    try {
      // await CompleteWorkout.collection.drop();
        console.log(req.params.id,req.query.day);
        const query = { userId: req.params.id };
        const day = req.query.day;
        query.day = day

        const completeWorkouts = await CompleteWorkout.findOne(query);

        
        console.log("show",req.user);
        if(completeWorkouts){
          res.status(200).json(completeWorkouts); // <- small fix: respond with populatedClasses!
        }
        else{
          console.log("generateSevenDaysWorkouts");
          await generateSevenDaysWorkouts(req.user);
          showUserDayCompleteWorkouts(req,res);
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }   
};
export const drop = async (req, res) => {
  try {
    await CompleteWorkout.collection.drop();
    res.status(201).json({message:"drop success"});
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

const generateSevenDaysWorkouts = async (user) => {
  const completeWorkouts = await CompleteWorkout.find({userId: user._id});
  console.log("udhaya",user,completeWorkouts);
  const workoutPlans = [
    {
      userId: "68167e9399a0e50951107e24",
      day: 8,
      classes: [
        {
          equipmentName: "Dumbbell",
          workoutName: "Bicep Curl",
          noOfSets: 3,
          givenReps: [12, 10, 8],
          doneReps: [12, 10, 8],
          givenWeights: [10, 12, 15],
          doneWeights: [10, 12, 15]
        },
        {
          equipmentName: "Barbell",
          workoutName: "Deadlift",
          noOfSets: 4,
          givenReps: [8, 6, 6, 4],
          doneReps: [8, 6, 5, 4],
          givenWeights: [60, 70, 80, 90],
          doneWeights: [60, 70, 75, 90]
        }
      ]
    },
    {
      userId: "68167e9399a0e50951107e24",
      day: 2,
      classes: [
        {
          equipmentName: "Bodyweight",
          workoutName: "Push-ups",
          noOfSets: 3,
          givenReps: [15, 15, 15],
          doneReps: [15, 14, 13],
          givenWeights: [0, 0, 0],
          doneWeights: [0, 0, 0]
        },
        {
          equipmentName: "Machine",
          workoutName: "Chest Press",
          noOfSets: 3,
          givenReps: [12, 10, 10],
          doneReps: [12, 10, 10],
          givenWeights: [30, 35, 35],
          doneWeights: [30, 35, 35]
        }
      ]
    },
    {
      userId: "68167e9399a0e50951107e24",
      day: 3,
      classes: [
        {
          equipmentName: "Treadmill",
          workoutName: "Running",
          noOfSets: 1,
          givenReps: [1],
          doneReps: [1],
          givenWeights: [0],
          doneWeights: [0]
        },
        {
          equipmentName: "Kettlebell",
          workoutName: "Swing",
          noOfSets: 3,
          givenReps: [20, 20, 20],
          doneReps: [20, 18, 18],
          givenWeights: [16, 16, 16],
          doneWeights: [16, 16, 16]
        }
      ]
    },
    {
      userId: "68167e9399a0e50951107e24",
      day: 4,
      classes: [
        {
          equipmentName: "Barbell",
          workoutName: "Squat",
          noOfSets: 4,
          givenReps: [10, 8, 8, 6],
          doneReps: [10, 8, 7, 6],
          givenWeights: [60, 70, 75, 80],
          doneWeights: [60, 70, 75, 80]
        },
        {
          equipmentName: "Leg Press Machine",
          workoutName: "Leg Press",
          noOfSets: 3,
          givenReps: [12, 10, 10],
          doneReps: [12, 10, 9],
          givenWeights: [80, 90, 90],
          doneWeights: [80, 90, 90]
        }
      ]
    },
    {
      userId: "68167e9399a0e50951107e24",
      day: 5,
      classes: [
        {
          equipmentName: "Bodyweight",
          workoutName: "Plank",
          noOfSets: 1,
          givenReps: [1],
          doneReps: [1],
          givenWeights: [0],
          doneWeights: [0]
        },
        {
          equipmentName: "Dumbbell",
          workoutName: "Lateral Raise",
          noOfSets: 3,
          givenReps: [12, 12, 10],
          doneReps: [12, 12, 10],
          givenWeights: [5, 5, 5],
          doneWeights: [5, 5, 5]
        }
      ]
    },
    {
      userId: "68167e9399a0e50951107e24",
      day: 6,
      classes: [
        {
          equipmentName: "Row Machine",
          workoutName: "Seated Row",
          noOfSets: 3,
          givenReps: [12, 10, 8],
          doneReps: [12, 10, 8],
          givenWeights: [40, 45, 50],
          doneWeights: [40, 45, 50]
        },
        {
          equipmentName: "Cable",
          workoutName: "Tricep Pushdown",
          noOfSets: 3,
          givenReps: [15, 12, 10],
          doneReps: [15, 12, 10],
          givenWeights: [20, 25, 30],
          doneWeights: [20, 25, 30]
        }
      ]
    },
    {
      userId: "68167e9399a0e50951107e24",
      day: 7,
      classes: [
        {
          equipmentName: "Yoga Mat",
          workoutName: "Stretching",
          noOfSets: 3,
          givenReps: [1, 1, 1],
          doneReps: [1, 1, 1],
          givenWeights: [0, 0, 0],
          doneWeights: [0, 0, 0]
        },
        {
          equipmentName: "Bodyweight",
          workoutName: "Burpees",
          noOfSets: 3,
          givenReps: [10, 10, 8],
          doneReps: [10, 9, 8],
          givenWeights: [0, 0, 0],
          doneWeights: [0, 0, 0]
        }
      ]
    }
  ];
  
      
    await CompleteWorkout.insertMany(workoutPlans);

}
// dataentry();