import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSave } from "react-icons/fi";
import axios from "axios";

const ProfileSettings = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", profilePic: "" });
    const [newProfilePic, setNewProfilePic] = useState(null);
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Unauthorized. Please log in.");
            navigate("/login");
            return;
        }

        axios.get("http://localhost:5000/api/user/profile", {
            headers: { Authorization: token },
        })
            .then(res => setUser(res.data))
            .catch(err => console.error("Error fetching user:", err));
    }, [navigate]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return alert("Unauthorized. Please log in.");

            const updatedFields = {};
            if (user.name) updatedFields.name = user.name;
            if (newProfilePic) updatedFields.profilePic = newProfilePic;
            if (password) updatedFields.password = password;

            console.log("Updating User:", updatedFields);
            
            const res = await axios.put("http://localhost:5000/api/user/update", updatedFields, {
                headers: { Authorization: token },
            });

            setUser(res.data);
            setNewProfilePic(newProfilePic);
            setPassword("");
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error.response?.data || error.message);
        }
    };

    return (
        <div className="flex flex-col items-center p-10 bg-gray-50 min-h-screen">
            {/* Back Button */}
            <button 
                onClick={() => navigate("/dashboard")}
                className="self-start bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg mb-6 flex items-center shadow-md transition-all">
                <FiArrowLeft className="mr-2" /> Back
            </button>

            <div className="bg-white shadow-xl p-8 rounded-xl w-96 text-center border border-gray-200">
                <h2 className="text-3xl font-bold mb-6 text-gray-700">Edit Profile</h2>

                {/* Profile Picture Preview */}
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-300">
                    <img
                        src={newProfilePic || user.profilePic || "https://via.placeholder.com/150"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Profile Picture Upload */}
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    className="mb-4 border rounded-md p-2 w-full text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />

                {/* Editable Fields */}
                <input 
                    type="text" 
                    name="name" 
                    value={user.name} 
                    onChange={handleChange} 
                    placeholder="Enter Name"
                    className="border p-2 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Password Field */}
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter New Password"
                    className="border p-2 w-full rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Save Button */}
                <button 
                    onClick={handleSave}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center mx-auto shadow-lg transition-all">
                    <FiSave className="mr-2" /> Save Changes
                </button>
            </div>
        </div>
    );
};

export default ProfileSettings;
