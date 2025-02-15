const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware"); // 👈 Import middleware

const router = express.Router();

// Update User Profile
router.put("/update", authMiddleware, async (req, res) => {
    const userId = req.user.id; // Extracted from token
    const { name, email, profilePic } = req.body; // Data from frontend

    try {
        // Find the user and update only provided fields
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: { ...(name && { name }), ...(email && { email }), ...(profilePic && { profilePic }) } },
            { new: true } // Return updated user
        );

        if (!updatedUser) return res.status(404).json({ message: "User not found" });

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get("/user", authMiddleware, async (req, res) => {
    try {
        console.log("Decoded User ID from Token:", req.user.id);
        const user = await User.findById(req.user.id);
        
        if (!user) {
            console.log("User not found in DB");
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User Found:", user);
        res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
