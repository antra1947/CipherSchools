
import express from "express";
const router = express.Router();
import User from "../cipherstudio/backend/models/userModel.js";


router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;