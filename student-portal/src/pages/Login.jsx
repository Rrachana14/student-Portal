// import React from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import { motion } from "framer-motion";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const { data } = await login(form);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            
            setTimeout(() => {
                navigate("/dashboard"); // Redirect to dashboard after login
            }, 2000);
        } catch (err) {
            setError("❌ Invalid email or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg shadow-2xl p-8 rounded-2xl w-96 border border-white/30"
            >
                <h2 className="text-3xl font-extrabold text-center text-white mb-6">
                    Welcome Back! 👋
                </h2>

                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-red-400 text-sm font-semibold mb-3"
                    >
                        {error}
                    </motion.p>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-transparent text-white border-b border-white/50 p-3 outline-none focus:border-blue-400 placeholder:text-gray-300"
                        required
                    />
                    <motion.input
                        whileFocus={{ scale: 1.05 }}
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        className="w-full bg-transparent text-white border-b border-white/50 p-3 outline-none focus:border-blue-400 placeholder:text-gray-300"
                        required
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={loading} // Disable button while loading
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                        }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
