import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// kanji and onDelete props passed from KanjiList.jsx
const KanjiCard = ({ kanji, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{kanji.kanji}</Typography>
        <Typography>Meaning: {kanji.meaning}</Typography>
        <Typography>Onyomi: {kanji.onyomi}</Typography>
        <Typography>Kunyomi: {kanji.kunyomi}</Typography>
        <Typography>JLPT: {kanji.jlptLevel}</Typography>
        <Typography>Notes: {kanji.notes}</Typography>
        <IconButton onClick={() => onDelete(kanji.id)} color="error">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default KanjiCard;
