import mongoose from "mongoose";

const AIDetectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  detectedSign: { type: mongoose.Schema.Types.ObjectId, ref: "SignLanguage" }, 
  confidence: { type: Number, required: true }, 
  correction: { type: String },
  detectedAt: { type: Date, default: Date.now },
});

const AIDetectionModel = mongoose.model("AIDetection", AIDetectionSchema);
export default AIDetectionModel
