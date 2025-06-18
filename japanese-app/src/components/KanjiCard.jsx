import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// kanji and onDelete props passed from KanjiList.jsx
const KanjiCard = ({ kanji, onDelete, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [editForm, setEditForm] = useState({ ...kanji });

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onUpdate({
      ...editForm,
      onyomi: editForm.onyomi.split(",").map((s) => s.trim()),
      kunyomi: editForm.kunyomi.split(",").map((s) => s.trim()),
      _id: kanji._id,
    });
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h4">{kanji.kanji}</Typography>
          <Typography>Meaning: {kanji.meaning}</Typography>
          <Typography>Onyomi: {kanji.onyomi.join(", ")}</Typography>
          <Typography>Kunyomi: {kanji.kunyomi.join(", ")}</Typography>
          <Typography>JLPT: {kanji.jlptLevel}</Typography>
          <Typography>Notes: {kanji.notes}</Typography>
          <IconButton onClick={() => onDelete(kanji._id)} color="error">
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => setOpen(true)} color="primary">
            <EditIcon />
          </IconButton>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Edit Kanji</DialogTitle>
        <DialogContent>
          {["kanji", "meaning", "onyomi", "kunyomi", "jlptLevel", "notes"].map(
            (field) => (
              <TextField
                key={field}
                margin="dense"
                label={field}
                name={field}
                value={editForm[field]}
                onChange={handleChange}
                fullWidth
              />
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default KanjiCard;
