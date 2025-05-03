import {create} from 'zustand';
import axios from '../libs/axios.js';
import {toast} from 'react-hot-toast';


export const useUserStore = create((set,get) => ({ 
    user: null,
    loading: false,
    checkingauth: true,

    signup: async ({name,email,password,confirmPassword}) => {
        set({loading: true});

        if (password !== confirmPassword) {
            set({loading: false});
            return toast.error('Passwords do not match');
        }

        try {
            const {data  } = await axios.post('/auth/signup', {name,email,password});
            // const token = data.token;
            // localStorage.setItem('token',token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            set({user: data.user,loading: false});
            toast.success('User created successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            set({loading: false});
        }
    },
    login: async ({email,password}) => {
        set({loading: true});
        try {
            const {data} = await axios.post('/auth/login', {email,password});
            console.log("useUserStore:login:",data.user);
            // const token = data.token;
            // localStorage.setItem('token',token);
            // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            set({user: data.user,loading: false});
            toast.success('User logged in successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            set({loading: false});
        }
    },

    checkAuth: async () => {
        set({checkingauth: true});
        console.log("useUserStore:chechauth:");
        
        try {
            const {data} = await axios.get('/auth/profile');
            console.log("useUserStore:checkAuth:",data.user);
            set({user: data.user,checkingauth: false});
        } catch (error) {
            set({checkingauth: false});
        }
    },logout: async () => {
		console.log("store:logout");
		try {
			await axios.post("/auth/logout");
			set({ user: null });
			toast.success("Logout successful");
		} catch (error) {
			toast.error(error.response?.data?.message || "An error occurred during logout");
		}
	},
    refreshToken: async () => {
		// Prevent multiple simultaneous refresh attempts
		if (get().checkingAuth) return;

		set({ checkingAuth: true });
		try {
			const response = await axios.post("/auth/refresh-token");
			set({ checkingAuth: false });
			return response.data;
		} catch (error) {
			set({ user: null, checkingAuth: false });
			throw error;
		}
	},
    updateUserData: async (fdata) => {
        set({loading: true});
        try {
            fdata.isDetailsFilled = true;
            const {data } = await axios.patch('/auth/user/'+get().user._id,fdata);
            set({user: data.user,loading: false});
            toast.success('User data updated successfully');
        } catch (error) {
            toast.error(error.response.data.message);
            set({loading: false});
        }
    },
})); 
// TODO: Implement the axios interceptors for refreshing access token

// Axios interceptor for token refresh
let refreshPromise = null;

axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
            console.log("useUserStore:originalRequest:",originalRequest,refreshPromise);

			try {
				// If a refresh is already in progress, wait for it to complete
				if (refreshPromise) {
					await refreshPromise;
					return axios(originalRequest);
				}

				// Start a new refresh process
				refreshPromise = useUserStore.getState().refreshToken();
				await refreshPromise;
				refreshPromise = null;

				return axios(originalRequest);
			} catch (refreshError) {
				// If refresh fails, redirect to login or handle as needed
				useUserStore.getState().logout();
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);