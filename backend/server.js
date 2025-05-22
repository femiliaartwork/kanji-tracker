import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import kanjiRoutes from "./routes/kanjiRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// const kanjiRoutes = require("./routes/kanjiRoutes");
app.use("/api/kanji", kanjiRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => console.error(err));
