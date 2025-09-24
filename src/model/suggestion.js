import mongoose from "mongoose";

const SuggestionSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  suggestion: { type: String, required: true },
    visible: { type: Boolean, default: true }, // default visible

});

const Suggestion = mongoose.models.Suggestion || mongoose.model("Suggestion", SuggestionSchema);
export default Suggestion;
