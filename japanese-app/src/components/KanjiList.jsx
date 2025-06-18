import React from "react";
import KanjiCard from "./KanjiCard";
import { Grid } from "@mui/material";

// kanjiList & onDelete props passed from App.js
const KanjiList = ({ kanjiList, onDelete, onUpdate }) => {
  return (
    <Grid container spacing={2}>
      {kanjiList.map((kanji) => (
        <Grid item xs={12} sm={6} md={4} key={kanji._id}>
          <KanjiCard kanji={kanji} onDelete={onDelete} onUpdate={onUpdate} />
        </Grid>
      ))}
    </Grid>
  );
};

export default KanjiList;
