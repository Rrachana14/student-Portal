import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import {
  FiLogOut,
  FiUser,
  FiMail,
  FiBriefcase,
  FiMoon,
  FiSun,
  FiSettings,
  
} from "react-icons/fi";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleDarkMode = () => {
    console.log(user)
    console.log(user.profilePic)
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Sidebar */}
      <div
        className={`w-1/4 p-6 flex flex-col items-center shadow-lg transition-all duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <motion.div
  className="relative w-24 h-24 rounded-full bg-gray-300 overflow-hidden border-4 border-gray-500 flex items-center justify-center"
  whileHover={{ scale: 1.1 }}
>
  {user?.profilePic ? (
    <img
      src={user.profilePic}
      alt="User Profile"
      className="w-full h-full object-cover"
    />
  ) : (
    <FaUserCircle className="text-gray-500 w-full h-full" />
  )}
</motion.div>
        <h2 className="text-xl font-bold mt-3">{user?.name || "User"}</h2>
        <p className="text-gray-500 text-sm flex items-center mt-1">
          <FiMail className="mr-2" /> {user?.email}
        </p>

        {/* Sidebar Navigation */}
        <div className="mt-6 flex flex-col gap-4 w-full">
          <button
            className={`flex items-center px-4 py-2 w-full rounded-lg transition-all ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            <FiBriefcase className="mr-3" /> Applications
          </button>
          <button
            onClick={() => navigate("/profile")}
            className={`flex items-center px-4 py-2 w-full rounded-lg transition-all ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
            }`}
          >
            <FiSettings className="mr-3" /> Profile Settings
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="mt-auto mb-4 flex items-center bg-blue-500 hover:bg-blue-600 transition-all px-6 py-2 rounded-lg text-white"
        >
          {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mb-6 flex items-center bg-red-500 hover:bg-red-600 transition-all px-6 py-2 rounded-lg text-white"
        >
          <FiLogOut className="mr-2" /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="w-3/4 flex justify-center items-center p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`shadow-2xl p-8 rounded-lg w-[90%] max-w-3xl transition-all ${
            darkMode ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <h1 className="text-3xl font-extrabold">User Dashboard</h1>
          <p className="text-gray-500 mt-2">
            Manage your applications and profile settings
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div
              className={`p-4 rounded-lg text-center shadow-md transition-all ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h2 className="text-xl font-bold">
                {user?.applications?.length || 0}
              </h2>
              <p className="text-sm text-gray-400">Applications</p>
            </div>
            <div
              className={`p-4 rounded-lg text-center shadow-md transition-all ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h2 className="text-xl font-bold">5</h2>
              <p className="text-sm text-gray-400">Saved Jobs</p>
            </div>
            <div
              className={`p-4 rounded-lg text-center shadow-md transition-all ${
                darkMode ? "bg-gray-700" : "bg-gray-100"
              }`}
            >
              <h2 className="text-xl font-bold">3</h2>
              <p className="text-sm text-gray-400">Interviews</p>
            </div>
          </div>

          {/* Application List */}
          <h2 className="text-xl font-semibold mt-5">Your Applications</h2>
          {user?.applications?.length > 0 ? (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 bg-gray-200 p-4 rounded-lg"
            >
              {user.applications.map((app, index) => (
                <li key={index} className="py-1 text-gray-700">
                  {app}
                </li>
              ))}
            </motion.ul>
          ) : (
            <p className="text-gray-500 mt-2 italic">No applications yet.</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
