import mongoose from "mongoose";
import {takenQuizzesSchema} from "../Quizzes/schema.js";
const userSchema = new mongoose.Schema({
    _id: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
    takenQuizzes: [takenQuizzesSchema],
  },
  { collection: "users" }
);
export default userSchema;