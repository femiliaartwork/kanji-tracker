import express from "express";
import Kanji from "../models/Kanji.js";

const router = express.Router();

// Todo: Add validation for all the routes
router.get("/", async (req, res) => {
  const kanjiList = await Kanji.find();
  res.json(kanjiList);
});

router.post("/", async (req, res) => {
  const newKanji = new Kanji(req.body);
  await newKanji.save();
  res.status(201).json(newKanji);
});

// delete Kanji by id params
router.delete("/:id", async (req, res) => {
  await Kanji.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// update Kanji by id params
router.put("/:id", async (req, res) => {
  try {
    const updatedKanji = await Kanji.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return the updated document
    );
    res.json(updatedKanji);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err.message });
  }
});

export default router;
