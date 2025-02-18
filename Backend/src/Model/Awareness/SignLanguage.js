import mongoose from "mongoose";

const SignLanguageSchema = new mongoose.Schema({
  signName: { type: String, required: true },
  description: { type: String, required: true }, 
  category: { type: String, enum: ["greeting", "action", "expression"], required: true }, 
  exampleVideo: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const SignLanguageModel = mongoose.model("SignLanguage", SignLanguageSchema);

export default SignLanguageModel

