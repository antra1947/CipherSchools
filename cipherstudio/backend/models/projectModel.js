import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  userId: String,
  name: String,
  code: String, 
});

export default mongoose.model("Project", projectSchema);
