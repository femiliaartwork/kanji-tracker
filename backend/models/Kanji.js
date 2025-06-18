import mongoose from "mongoose";

const KanjiSchema = new mongoose.Schema({
  kanji: { type: String, required: true },
  meaning: { type: String, required: true },
  onyomi: [String],
  kunyomi: [String],
  jlptLevel: Number,
  notes: String,
  isLearned: { type: Boolean, default: false },
});

const Kanji = mongoose.model("Kanji", KanjiSchema);
export default Kanji;
