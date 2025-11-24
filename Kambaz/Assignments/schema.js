import mongoose from "mongoose";
import courseSchema from "../Courses/schema.js";

const assignmentSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: String, // TODO: This may be `courseSchema`
    description: String,
    points: Number,
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;