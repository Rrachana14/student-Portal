const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// // Register User
// router.post("/register", async (req, res) => {
//     const { name, email, password } = req.body;
//     try {
//         let user = await User.findOne({ email });
//         if (user) return res.status(400).json({ message: "User already exists" });

//         user = new User({ name, email, password});
//         await user.save();

//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

router.post("/register", async (req, res) => {
  const { name, email, password, profilePic } = req.body;

  try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ message: "User already exists" });

      // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({ name, email, password, profilePic: profilePic || "" }); // Include profilePic

      await user.save();
      res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});


// Login User
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email, applications: user.applications } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
