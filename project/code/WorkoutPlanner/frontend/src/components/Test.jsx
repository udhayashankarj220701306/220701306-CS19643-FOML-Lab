import React, { useState, useEffect } from "react";
import { useClassStore } from "../stores/useClassStore.js";
import { useUserStore } from "../stores/useUserStore.js";

const Test = () => {
const getUserDateCompleteWorkout = useClassStore((state) => state.getUserDateCompleteWorkout);

const completeWorkout = useClassStore((state) => state.completeWorkout);
const updateClass = useClassStore((state) => state.updateClass);
const changeDay = useClassStore((state) => state.changeDay);
const id = useClassStore((state)=> state.id);
  const { user } = useUserStore();
  const day = useClassStore((state) => state.day);
  const [sad, setSad] = useState([]);
  const [data, setData] = useState([]); // new state to store user editable weights/reps

  // Fetch workouts
  useEffect(() => {
    console.log("once");
    // if (user  && !localStorage.getItem("workout_day_set")) {
      const calculatedDay = Math.ceil(
        (new Date().getTime() - new Date(user.startDate).getTime()) / (1000 * 60 * 60 * 24)
      );
      changeDay({ daay: calculatedDay });
      // localStorage.setItem("workout_day_set", "true");
    // }
  }, []);
  useEffect(() => {
    if (user) {
      getUserDateCompleteWorkout({ user});
    }
  }, [getUserDateCompleteWorkout,day]);

  // Set sad and initialize data for inputs
  useEffect(() => {
    if (completeWorkout) {
      setSad(completeWorkout);

      const initialData = completeWorkout.map(item => ({
        equipmentName:item.equipmentName,
        workoutName:item.workoutName,
        noOfSets:item.noOfSets,
        givenReps:item.givenReps,
        givenWeights:item.givenWeights,
        doneWeights: item.givenWeights.map((j,i) => item.doneWeights[i] || 0),
        doneReps: item.givenReps.map((j,i) => item.doneReps[i] || 0),
      }));

      setData(initialData);
    }
  }, [completeWorkout]);
  useEffect(() => {
    console.log(completeWorkout);
  }, [completeWorkout]);

  return (
    <>
      <h1 className="text-2xl font-bold m-2">Day: {day}</h1>
      <div className="flex flex-col items-center min-w-fit w-fit bg-gray-900 rounded-lg p-2 gap-2 m-2">
        {sad.map((sd, index) => (
          <div key={index} className="flex flex-col items-center gap-1 bg-gray-200 rounded-lg p-1">
            <div className="flex flex-col w-full bg-blue-500 rounded-lg p-1 text-white justify-between">
              <div>Workout: {sd.workoutName || "No name"}</div>
              <div>Equipment: {sd.equipmentName || "No equipment"}</div>
            </div>
            <div>
              <form className="flex flex-row w-full flex-wrap">
                {Array.from({ length: sd.noOfSets }).map((_, setIndex) => (
                  <div key={setIndex} className="bg-white shadow-2xl m-1 p-1 rounded-lg">
                    <div>Set : {setIndex + 1}</div>
                    <div>Weight: {sd.givenWeights[setIndex]}</div>
                    <div>Done weights:
                      <input
                        type="number"
                        value={data[index]?.doneWeights[setIndex] ?? 0}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].doneWeights[setIndex] = parseFloat(e.target.value) || 0;
                          
                          setData(newData);
                          updateClass({id:sad._id, clas:newData});
                        }}
                        className="bg-black w-14 text-center text-white rounded-lg m-1"
                      />
                    </div>
                    <div>Reps: {sd.givenReps[setIndex]}</div>
                    <div>Done reps:
                      <input
                        type="number"
                        value={data[index]?.doneReps[setIndex] ?? 0}
                        onChange={(e) => {
                          const newData = [...data];
                          newData[index].doneReps[setIndex] = parseInt(e.target.value) || 0;
                          setData(newData);
                          updateClass({id:sad._id, clas:newData});
                        }}
                        className="bg-black w-14 text-center text-white rounded-lg m-1"
                      />
                    </div>
                  </div>
                ))}
              </form>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Test;