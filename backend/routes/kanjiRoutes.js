import express from "express";
import Kanji from "../models/Kanji.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const kanjiList = await Kanji.find();
  res.json(kanjiList);
});

router.post("/", async (req, res) => {
  const newKanji = new Kanji(req.body);
  await newKanji.save();
  res.status(201).json(newKanji);
});

router.delete("/:id", async (req, res) => {
  await Kanji.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

export default router;
