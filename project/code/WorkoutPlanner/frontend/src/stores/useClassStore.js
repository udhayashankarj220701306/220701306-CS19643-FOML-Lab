import {create} from 'zustand';
import axios from '../libs/axios.js';
import {toast} from 'react-hot-toast';
import { updateCompleteWorkout } from '../../../backend/controllers/completeworkout.controller.js';


export const useClassStore = create((set,get) => ({ 
    // : null,
    completeWorkout:null,
    id: null,
    loading: false,
    day:null,
    dates:[],

    getUserDateCompleteWorkout: async ({user}) => {
        set({loading: true});
        console.log("useClassStore:getUserDateCompleteWorkout:",user,get().day);

        try {
            const {data } = await axios.get("/completeWorkout/date/"+user._id, {
                params: { day: get().day }
              });
            set({id:data._id});
            set({completeWorkout:data.classes,loading: false});
            toast.success('Complete Workout Fetched successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            set({loading: false});
        }
    },
    updateClass: async ({id,clas}) => {
        set({loading: true});
        console.log("useClassStore:updateClass :",id,clas);

        try {
            const {data } = await axios.patch("/class/"+id,clas);
            set({loading: false});
            toast.success('class updated successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            set({loading: false});
        }
    },
    changeDay: async ({daay}) => {
        console.log("useClassStore:changeDay:",daay);
        set({day:daay});
    },
    generateSevenDays: async ({formData}) => {
        set({loading: true});
        console.log("useClassStore:generateCompleteWorkout:",formData);    
        // try {
        //     const {data } = await axios.post("/completeWorkout", {userId:user._id,date:get().date});
        //     set({id:data._id});
        //     set({completeWorkout:data.classes,loading: false});
        //     toast.success('Complete Workout Generated successfully');
        // } catch (error) {
        //     toast.error(error.response.data.message);
        //     set({loading: false});
        // }
    },
})); 
