import React, { useState, useEffect } from "react";
import { useUserStore } from "../stores/useUserStore.js";

const Profile = () => {
    const { user, updateUserData } = useUserStore();
    
    const [formData, setFormData] = useState({
        height: user.height || "",
        weight: user.weight || "",
        age: user.age || "",
        gender: user.gender || "",
        goal: user.goal || ""
    });

    useEffect(() => {
        // Set form data from user store when the user data changes
        setFormData({
            height: user.height || "",
            weight: user.weight || "",
            age: user.age || "",
            gender: user.gender || "",
            goal: user.goal || ""
        });
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the updateUserData function from the store to update the data
        updateUserData(formData);

    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">Profile</h1>
            <p className="text-center text-gray-700">Name: {user.name}</p>
            <p className="text-center text-gray-700 mb-6">Email: {user.email}</p>

            {/* Form for updating user data */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="height" className="block text-gray-700 font-semibold">Height:</label>
                    <input
                        type="text"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="weight" className="block text-gray-700 font-semibold">Weight:</label>
                    <input
                        type="text"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="age" className="block text-gray-700 font-semibold">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="gender" className="block text-gray-700 font-semibold">Gender:</label>
                    <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="goal" className="block text-gray-700 font-semibold">Goal:</label>
                    <input
                        type="text"
                        id="goal"
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-200"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
