import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  answer: { type: mongoose.Schema.Types.Mixed, required: true },
  correct: { type: Boolean, required: true },
})

const questionSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  question: { type: String, required: true },
  points: { type: Number, required: true },
  type: { type: String, enum: ["MULTIPLE_CHOICE", "BOOLEAN", "WRITTEN"], required: true },
  choices: { type: [answerSchema], required: true },
})

export const takenQuizzesSchema = new mongoose.Schema({
  quizId: { type: String, required: true },
  answers: { type: [answerSchema], required: true },
  quizGrade: { type: Number, required: true },
  attempt: { type: Number, required: true },
})

const quizSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
  type: { type: String, enum: ["GRADED_QUIZ", "PRACTICE_QUIZ", "GRADED_SURVEY", "UNGRADED_SURVEY"], required: false, default: "GRADED_QUIZ" },
  points: { type: Number, required: true },
  assignmentGroup: { type: String, enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"], required: false, default: "QUIZZES" },
  shuffleAnswers: { type: Boolean, required: false, default: true },
  timeLimit: { type: Number, required: true },
  multipleAttempts: { type: Boolean, required: false, default: false },
  published: { type: Boolean, required: true },
  numAttempts: { type: Number, required: false, default: 1 },
  showCorrect: { type: Boolean, required: true },
  accessCode: { type: String, required: false },
  oneAtATime: { type: Boolean, required: false, default: true },
  webcam: { type: Boolean, required: false, default: false },
  lockQuestions: { type: Boolean, required: false, default: false },
  dueDate: { type: Date, required: true },
  availableFrom: { type: Date, required: true },
  availableUntil: { type: Date, required: true },
  questions: {type: [questionSchema], required: true},
  },
  { collection: "quizzes" }
);

export default quizSchema;
