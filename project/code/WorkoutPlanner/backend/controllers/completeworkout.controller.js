// import CompleteWorkout from "../models/completeWorkout.model.js";

// export const addCompleteWorkout = async (req, res) => {
//     try {
//         // const { name } = req.body;
        
//         req.body.date = new Date(req.body.date);
//         const completeWorkouts= await CompleteWorkout.create(req.body);
//         res.status(201).json(completeWorkouts)
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };
// export const showCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({});
//         // const populatedcompleteWorkoutes = await Promise.all(classes.map(async (classs) => {
//         //     return classs.populate([
//         //         { path: 'equipmentId', model: 'Equipment' },
//         //         { path: 'workoutId', model: 'Workout' }
//         //       ]);
//         // }))
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }   
// }

// export const showUserCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({userId: req.params.id});
//         const populatedClasses = await Promise.all(completeWorkouts.map(async (completeWorkout) => {
//             await completeWorkout.populate([
//                 { path: 'classes', model: 'Class' },
//             ]);
//             return completeWorkout;
//         }))
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }   
// }

// export const showUserDayCompleteWorkouts = async (req, res) => {
//     try {
//       // await CompleteWorkout.collection.drop();
//         console.log(req.params.id,req.query.day);
//         const query = { userId: req.params.id };
//         const day = req.query.day;
//         query.day = day

//         const completeWorkouts = await CompleteWorkout.findOne(query);

        
//         console.log("show",req.user);
//         if(completeWorkouts){
//           res.status(200).json(completeWorkouts); // <- small fix: respond with populatedClasses!
//         }
//         else{
//           console.log("generateSevenDaysWorkouts");
//           await generateSevenDaysWorkouts(req.user);
//           showUserDayCompleteWorkouts(req,res);
//         }
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }   
// };
// export const drop = async (req, res) => {
//   try {
//     await CompleteWorkout.collection.drop();
//     res.status(201).json({message:"drop success"});
//   } catch (error) {
//       res.status(500).json({ message: "Server error", error: error.message });
//   }   
// };




// export const deleteCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndDelete(id);
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// }       

// export const updateCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// }

// const generateSevenDaysWorkouts = async (user) => {
//   const completeWorkouts = await CompleteWorkout.find({userId: user._id});
//   console.log("udhaya",user,completeWorkouts);
  // const workoutPlans = [
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 8,
  //     classes: [
  //       {
  //         equipmentName: "Dumbbell",
  //         workoutName: "Bicep Curl",
  //         noOfSets: 3,
  //         givenReps: [12, 10, 8],
  //         doneReps: [12, 10, 8],
  //         givenWeights: [10, 12, 15],
  //         doneWeights: [10, 12, 15]
  //       },
  //       {
  //         equipmentName: "Barbell",
  //         workoutName: "Deadlift",
  //         noOfSets: 4,
  //         givenReps: [8, 6, 6, 4],
  //         doneReps: [8, 6, 5, 4],
  //         givenWeights: [60, 70, 80, 90],
  //         doneWeights: [60, 70, 75, 90]
  //       }
  //     ]
  //   },
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 2,
  //     classes: [
  //       {
  //         equipmentName: "Bodyweight",
  //         workoutName: "Push-ups",
  //         noOfSets: 3,
  //         givenReps: [15, 15, 15],
  //         doneReps: [15, 14, 13],
  //         givenWeights: [0, 0, 0],
  //         doneWeights: [0, 0, 0]
  //       },
  //       {
  //         equipmentName: "Machine",
  //         workoutName: "Chest Press",
  //         noOfSets: 3,
  //         givenReps: [12, 10, 10],
  //         doneReps: [12, 10, 10],
  //         givenWeights: [30, 35, 35],
  //         doneWeights: [30, 35, 35]
  //       }
  //     ]
  //   },
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 3,
  //     classes: [
  //       {
  //         equipmentName: "Treadmill",
  //         workoutName: "Running",
  //         noOfSets: 1,
  //         givenReps: [1],
  //         doneReps: [1],
  //         givenWeights: [0],
  //         doneWeights: [0]
  //       },
  //       {
  //         equipmentName: "Kettlebell",
  //         workoutName: "Swing",
  //         noOfSets: 3,
  //         givenReps: [20, 20, 20],
  //         doneReps: [20, 18, 18],
  //         givenWeights: [16, 16, 16],
  //         doneWeights: [16, 16, 16]
  //       }
  //     ]
  //   },
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 4,
  //     classes: [
  //       {
  //         equipmentName: "Barbell",
  //         workoutName: "Squat",
  //         noOfSets: 4,
  //         givenReps: [10, 8, 8, 6],
  //         doneReps: [10, 8, 7, 6],
  //         givenWeights: [60, 70, 75, 80],
  //         doneWeights: [60, 70, 75, 80]
  //       },
  //       {
  //         equipmentName: "Leg Press Machine",
  //         workoutName: "Leg Press",
  //         noOfSets: 3,
  //         givenReps: [12, 10, 10],
  //         doneReps: [12, 10, 9],
  //         givenWeights: [80, 90, 90],
  //         doneWeights: [80, 90, 90]
  //       }
  //     ]
  //   },
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 5,
  //     classes: [
  //       {
  //         equipmentName: "Bodyweight",
  //         workoutName: "Plank",
  //         noOfSets: 1,
  //         givenReps: [1],
  //         doneReps: [1],
  //         givenWeights: [0],
  //         doneWeights: [0]
  //       },
  //       {
  //         equipmentName: "Dumbbell",
  //         workoutName: "Lateral Raise",
  //         noOfSets: 3,
  //         givenReps: [12, 12, 10],
  //         doneReps: [12, 12, 10],
  //         givenWeights: [5, 5, 5],
  //         doneWeights: [5, 5, 5]
  //       }
  //     ]
  //   },
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 6,
  //     classes: [
  //       {
  //         equipmentName: "Row Machine",
  //         workoutName: "Seated Row",
  //         noOfSets: 3,
  //         givenReps: [12, 10, 8],
  //         doneReps: [12, 10, 8],
  //         givenWeights: [40, 45, 50],
  //         doneWeights: [40, 45, 50]
  //       },
  //       {
  //         equipmentName: "Cable",
  //         workoutName: "Tricep Pushdown",
  //         noOfSets: 3,
  //         givenReps: [15, 12, 10],
  //         doneReps: [15, 12, 10],
  //         givenWeights: [20, 25, 30],
  //         doneWeights: [20, 25, 30]
  //       }
  //     ]
  //   },
  //   {
  //     userId: "68167e9399a0e50951107e24",
  //     day: 7,
  //     classes: [
  //       {
  //         equipmentName: "Yoga Mat",
  //         workoutName: "Stretching",
  //         noOfSets: 3,
  //         givenReps: [1, 1, 1],
  //         doneReps: [1, 1, 1],
  //         givenWeights: [0, 0, 0],
  //         doneWeights: [0, 0, 0]
  //       },
  //       {
  //         equipmentName: "Bodyweight",
  //         workoutName: "Burpees",
  //         noOfSets: 3,
  //         givenReps: [10, 10, 8],
  //         doneReps: [10, 9, 8],
  //         givenWeights: [0, 0, 0],
  //         doneWeights: [0, 0, 0]
  //       }
  //     ]
  //   }
  // ];
  
      
//     await CompleteWorkout.insertMany(workoutPlans);

// }
// // dataentry();

import CompleteWorkout from "../models/completeWorkout.model.js";
import axios from 'axios';
// import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";


// dotenv.config();


export const addCompleteWorkout = async (req, res) => {
    try {
        req.body.date = new Date(req.body.date);
        const completeWorkouts = await CompleteWorkout.create(req.body);
        res.status(201).json(completeWorkouts)
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const showCompleteWorkouts = async (req, res) => {
    try {
        const completeWorkouts = await CompleteWorkout.find({});
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const showUserCompleteWorkouts = async (req, res) => {
    try {
        const completeWorkouts = await CompleteWorkout.find({ userId: req.params.id });
        const populatedClasses = await Promise.all(completeWorkouts.map(async (completeWorkout) => {
            await completeWorkout.populate([
                { path: 'classes', model: 'Class' },
            ]);
            return completeWorkout;
        }));
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const showUserDayCompleteWorkouts = async (req, res) => {
    try {
        // console.log(req.params.id, req.query.day);
        const query = { userId: req.params.id, day: req.query.day };

        let completeWorkout = await CompleteWorkout.findOne(query);
        
        // console.log("show", req.user);
        
        if (completeWorkout) {
            res.status(200).json(completeWorkout);
        } else {
            // console.log("generateSevenDaysWorkouts");
            await generateSevenDaysWorkouts(req.user);
            // Re-run the query after generating
            completeWorkout = await CompleteWorkout.findOne(query);
            res.status(200).json(completeWorkout);
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const drop = async (req, res) => {
    try {
        await CompleteWorkout.collection.drop();
        res.status(201).json({ message: "drop success" });
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
    };
    
    export const updateCompleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const completeWorkouts = await CompleteWorkout.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(completeWorkouts);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const generateSevenDaysWorkouts = async (user) => {
  try {
    console.log(process.env.GEMINI_API_KEY);
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});
    console.log("Fetching workout plan for user", user._id);
    
    
        let prompt = `Generate a personalized 7-day workout plan in JSON format for the following user:
        {
            "userId": "${user._id}",
            "goal": "General fitness"
            }
        Each item should include:
        - "day": (number),
        - "classes": [
            {
                "equipmentName": (string),
                "workoutName": (string),
                "noOfSets": (number),
                "givenReps": [array of numbers],
                "givenWeights": [array of numbers]
            }
        ]
        Respond ONLY in JSON array format without extra text or formatting symbols.`;
        
        console.log(prompt);

        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: prompt,
        });
        console.log(response.text.slice(7, -3));
        const planText=response.text.slice(7, -3);
        // console.log("Received workout plan:", planText);

        // Parse JSON response
        const workoutPlans = JSON.parse(planText);

        // Attach userId if DeepSeek didn't include it
        const formattedPlans = workoutPlans.map(plan => ({
            ...plan,
            userId: user._id
        }));

        await CompleteWorkout.insertMany(formattedPlans);
        console.log("Workout plans saved successfully.");
    } catch (error) {
        console.error("Error generating workout plan:", error.message);
    }
};











// import CompleteWorkout from "../models/completeWorkout.model.js";
// import User from "../models/user.model.js";  // <-- Make sure you have this model
// import axios from 'axios';

// // 1️⃣ Add Complete Workout
// export const addCompleteWorkout = async (req, res) => {
//     try {
//         req.body.date = new Date(req.body.date);
//         const completeWorkouts = await CompleteWorkout.create(req.body);
//         res.status(201).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 2️⃣ Show All Complete Workouts
// export const showCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({});
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 3️⃣ Show User's Complete Workouts
// export const showUserCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({ userId: req.params.id });
//         const populatedClasses = await Promise.all(completeWorkouts.map(async (completeWorkout) => {
//             await completeWorkout.populate([
//                 { path: 'classes', model: 'Class' },
//             ]);
//             return completeWorkout;
//         }));
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 4️⃣ Show Specific Day Workout (with auto-generation if not found)
// export const showUserDayCompleteWorkouts = async (req, res) => {
//     try {
//         console.log(req.params.id, req.query.day);
//         const query = { userId: req.params.id, day: req.query.day };

//         let completeWorkout = await CompleteWorkout.findOne(query);

//         if (completeWorkout) {
//             res.status(200).json(completeWorkout);
//         } else {
//             console.log("No workout found, generating new plan...");

//             // Fetch the user object using the ID
//             const user = await User.findById(req.params.id);
//             if (!user) {
//                 return res.status(404).json({ message: "User not found." });
//             }

//             await generateSevenDaysWorkouts(user);

//             // Re-run the query after generating
//             completeWorkout = await CompleteWorkout.findOne(query);
//             res.status(200).json(completeWorkout);
//         }
//     } catch (error) {
//         console.error("Error in showUserDayCompleteWorkouts:", error.message);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 5️⃣ Drop All Complete Workouts
// export const drop = async (req, res) => {
//     try {
//         await CompleteWorkout.collection.drop();
//         res.status(201).json({ message: "drop success" });
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 6️⃣ Delete a Complete Workout
// export const deleteCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndDelete(id);
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 7️⃣ Update a Complete Workout
// export const updateCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };


// const generateSevenDaysWorkouts = async (user) => {
//   try {
//       // Fetch workouts from Gemini API
//       const response = await axios.get('https://api.gemini.com/v1/workouts', {
//           headers: { 'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` }
//       });
//       const workoutData = response.data; // Assuming the response contains workout plans in the expected format
//       console.log("hello",response);
//       // Prepare the workout plan for the user
//       const workoutPlans = workoutData.map((workout, index) => ({
//           userId: user._id,
//           day: index + 1, // Assign day based on index
//           classes: workout.classes.map((exercise) => ({
//               equipmentName: exercise.equipmentName,
//               workoutName: exercise.workoutName,
//               noOfSets: exercise.noOfSets,
//               givenReps: exercise.givenReps,
//               doneReps: exercise.doneReps,
//               givenWeights: exercise.givenWeights,
//               doneWeights: exercise.doneWeights
//           }))
//       }));

//       // Insert the workout plans into the database
//       await CompleteWorkout.insertMany(workoutPlans);

//   } catch (error) {
//       console.error("Error fetching workouts from Gemini API:", error);
//   }
// };










// import CompleteWorkout from "../models/completeWorkout.model.js";
// import User from "../models/user.model.js";
// import axios from 'axios';

// // 1️⃣ Add Complete Workout
// export const addCompleteWorkout = async (req, res) => {
//     try {
//         req.body.date = new Date(req.body.date);
//         const completeWorkouts = await CompleteWorkout.create(req.body);
//         res.status(201).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in addCompleteWorkout:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 2️⃣ Show All Complete Workouts
// export const showCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({});
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in showCompleteWorkouts:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 3️⃣ Show User's Complete Workouts
// export const showUserCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({ userId: req.params.id });
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in showUserCompleteWorkouts:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 4️⃣ Show Specific Day Workout (with auto-generation if not found)
// export const showUserDayCompleteWorkouts = async (req, res) => {
//     try {
//         const query = { userId: req.params.id, day: req.query.day };

//         let completeWorkout = await CompleteWorkout.findOne(query).populate({
//             path: 'classes',
//             model: 'Class'
//         });

//         if (completeWorkout) {
//             res.status(200).json(completeWorkout);
//         } else {
//             console.log("No workout found, generating new plan...");

//             const user = await User.findById(req.params.id);
//             if (!user) {
//                 return res.status(404).json({ message: "User not found." });
//             }

//             const workoutPlan = await generateSevenDaysWorkouts(user);
//             if (!workoutPlan) {
//                 return res.status(500).json({ message: "Failed to generate workout plan" });
//             }

//             completeWorkout = await CompleteWorkout.findOne(query).populate({
//                 path: 'classes',
//                 model: 'Class'
//             });
//             res.status(200).json(completeWorkout);
//         }
//     } catch (error) {
//         console.error("Error in showUserDayCompleteWorkouts:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 5️⃣ Drop All Complete Workouts
// export const drop = async (req, res) => {
//     try {
//         await CompleteWorkout.collection.drop();
//         res.status(200).json({ message: "Drop success" });
//     } catch (error) {
//         console.error("Error in drop:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 6️⃣ Delete a Complete Workout
// export const deleteCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndDelete(id);
//         if (!completeWorkouts) {
//             return res.status(404).json({ message: "Workout not found" });
//         }
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in deleteCompleteWorkout:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 7️⃣ Update a Complete Workout
// export const updateCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndUpdate(id, req.body, { new: true });
//         if (!completeWorkouts) {
//             return res.status(404).json({ message: "Workout not found" });
//         }
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in updateCompleteWorkout:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// const generateSevenDaysWorkouts = async (user) => {
//     try {
//         // Fetch workouts from Gemini API
//         const response = await axios.get('https://api.gemini.com/api/v2/fitness/workouts', {  //  <---  Replace this URL
//             headers: { 'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` }
//         });
//         const workoutData = response.data;
//         console.log("Gemini API Response:", workoutData);

//         if (!Array.isArray(workoutData)) {
//             console.error("Gemini API did not return an array:", workoutData);
//             return null;
//         }

//         const workoutPlans = workoutData.map((workout, index) => {
//             if (!workout || !workout.classes) {
//                 console.warn(`Workout data for day ${index + 1} is missing or incomplete. Skipping.`);
//                 return null;
//             }
//             return {
//                 userId: user._id,
//                 day: index + 1,
//                 classes: workout.classes.map((exercise) => {
//                     if (!exercise) {
//                         console.warn(`Exercise data within day ${index + 1} is missing. Skipping.`);
//                         return null;
//                     }
//                     return {
//                         equipmentName: exercise.equipmentName,
//                         workoutName: exercise.workoutName,
//                         noOfSets: exercise.noOfSets,
//                         givenReps: exercise.givenReps,
//                         doneReps: exercise.doneReps || [],
//                         givenWeights: exercise.givenWeights,
//                         doneWeights: exercise.doneWeights || []
//                     };
//                 }).filter(Boolean)
//             };
//         }).filter(Boolean);

//         if (workoutPlans.length > 0) {
//             await CompleteWorkout.insertMany(workoutPlans);
//             return workoutPlans;
//         } else {
//             return [];
//         }
//     } catch (error) {
//         console.error("Error fetching workouts from Gemini API:", error);
//         return null;
//     }
// };








// import CompleteWorkout from "../models/completeWorkout.model.js";
// import User from "../models/user.model.js";
// import axios from 'axios';

// // 1️⃣ Add Complete Workout
// export const addCompleteWorkout = async (req, res) => {
//     try {
//         req.body.date = new Date(req.body.date);
//         const completeWorkouts = await CompleteWorkout.create(req.body);
//         res.status(201).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in addCompleteWorkout:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 2️⃣ Show All Complete Workouts
// export const showCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({});
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in showCompleteWorkouts:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 3️⃣ Show User's Complete Workouts
// export const showUserCompleteWorkouts = async (req, res) => {
//     try {
//         const completeWorkouts = await CompleteWorkout.find({ userId: req.params.id });
//         const populatedClasses = await Promise.all(completeWorkouts.map(async (completeWorkout) => {
//             try {
//                 await completeWorkout.populate([
//                     { path: 'classes', model: 'Class' },
//                 ]);
//                 return completeWorkout;
//             } catch (e) {
//                 console.error("Error populating classes:", e); // Log error during population
//                 throw e; // Re-throw to be caught by the outer catch
//             }
//         }));
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in showUserCompleteWorkouts:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 4️⃣ Show Specific Day Workout (with auto-generation if not found)
// export const showUserDayCompleteWorkouts = async (req, res) => {
//     try {
//         console.log("showUserDayCompleteWorkouts - Start", { userId: req.params.id, day: req.query.day });
//         const query = { userId: req.params.id, day: req.query.day };

//         let completeWorkout = await CompleteWorkout.findOne(query).populate({
//             path: 'classes',
//             model: 'Class'
//         });

//         console.log("showUserDayCompleteWorkouts - After findOne", { completeWorkout });

//         if (completeWorkout) {
//             console.log("showUserDayCompleteWorkouts - Workout found", { completeWorkout });
//             res.status(200).json(completeWorkout);
//         } else {
//             console.log("showUserDayCompleteWorkouts - Workout not found, generating...");
//             const user = await User.findById(req.params.id);
//             if (!user) {
//                 console.log("showUserDayCompleteWorkouts - User not found");
//                 return res.status(404).json({ message: "User not found." });
//             }
//             try {
//                 const workoutPlans = await generateSevenDaysWorkouts(user, req.query.day);
//                 console.log("showUserDayCompleteWorkouts - generateSevenDaysWorkouts returned:", { workoutPlans });
//                 if (!workoutPlans || workoutPlans.error) {  // Check for null or error
//                     console.log("showUserDayCompleteWorkouts - generateSevenDaysWorkouts failed");
//                     const errorMessage = workoutPlans?.error || "Failed to generate workout plan"; //Get the error message.
//                     return res.status(500).json({ message: errorMessage });
//                 }
//                 // Re-run the query after generating
//                 completeWorkout = await CompleteWorkout.findOne(query).populate({
//                     path: 'classes',
//                     model: 'Class'
//                 });
//                 console.log("showUserDayCompleteWorkouts - completeWorkout after generation:", { completeWorkout });
//                 res.status(200).json(completeWorkout);
//             } catch (generationError) {
//                 console.error("showUserDayCompleteWorkouts - Error in generateSevenDaysWorkouts:", generationError);
//                 return res.status(500).json({ message: "Error generating workout plan", error: generationError.message });
//             }
//         }
//     } catch (error) {
//         console.error("Error in showUserDayCompleteWorkouts:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 5️⃣ Drop All Complete Workouts
// export const drop = async (req, res) => {
//     try {
//         await CompleteWorkout.collection.drop();
//         res.status(200).json({ message: "Drop success" });
//     } catch (error) {
//         console.error("Error in drop:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 6️⃣ Delete a Complete Workout
// export const deleteCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndDelete(id);
//         if (!completeWorkouts) {
//             return res.status(404).json({ message: "Workout not found" });
//         }
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in deleteCompleteWorkout:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// // 7️⃣ Update a Complete Workout
// export const updateCompleteWorkout = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const completeWorkouts = await CompleteWorkout.findByIdAndUpdate(id, req.body, { new: true });
//         if (!completeWorkouts) {
//             return res.status(404).json({ message: "Workout not found" });
//         }
//         res.status(200).json(completeWorkouts);
//     } catch (error) {
//         console.error("Error in updateCompleteWorkout:", error);
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// };

// const generateSevenDaysWorkouts = async (user, day) => {
//     try {
//         console.log("Fetching workout plan for user", user._id);

//         const prompt = `Generate a personalized workout plan in JSON format for the following user for day ${day}:
// {
//     "userId": "${user._id}",
//     "goal": "General fitness",
//     "day": ${day}
// }
// Respond ONLY in JSON array format without extra text.
// The array should contain a single object for the specified day.`;

//         const response = await axios.post(
//             'https://api.deepseek.com/v1/chat/completions',
//             {
//                 model: 'deepseek-chat',
//                 messages: [{ role: 'user', content: prompt }]
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
//                 }
//             }
//         );

//         const planText = response.data?.choices?.[0]?.message?.content;
//         console.log("Received workout plan text:", planText);

//         if (!planText) {
//             throw new Error("No workout plan text received from DeepSeek API");
//         }

//         // Parse the JSON response
//         const workoutPlan = JSON.parse(planText);
//         console.log("Parsed workout plan:", workoutPlan);

//          if (!Array.isArray(workoutPlan)) {
//             throw new Error("DeepSeek API response was not an array.");
//         }
//         if (workoutPlan.length === 0) {
//              throw new Error("DeepSeek API returned an empty array.");
//         }

//         // Attach userId and day and ensure the structure matches
//         const formattedPlan = workoutPlan.map(item => ({
//             userId: user._id,
//             day: day,
//             classes: item.classes.map(c => ({
//                 equipmentName: c.equipmentName || "",
//                 workoutName: c.workoutName || "",
//                 noOfSets: c.noOfSets || 0,
//                 givenReps: c.givenReps || [],
//                 doneReps: c.doneReps || [],
//                 givenWeights: c.givenWeights || [],
//                 doneWeights: c.doneWeights || []
//             }))
//         }));

//         await CompleteWorkout.insertMany(formattedPlan);
//         console.log("Workout plans saved successfully.");
//         return formattedPlan;

//     } catch (error) {
//         console.error("Error generating workout plan:", error);
//         return { error: error.message };
//     }
// };
