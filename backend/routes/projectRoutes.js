import express from "express";
const router = express.Router();
import Project from "../cipherstudio/backend/models/projectModel.js";


router.post("/", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.json({ message: "Project saved", project });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

export default router;
