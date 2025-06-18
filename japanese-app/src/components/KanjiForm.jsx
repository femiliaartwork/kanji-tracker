import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const KanjiForm = ({ onAdd }) => {
  // set state for for the kanji information in the form.
  const [form, setForm] = useState({
    kanji: "",
    meaning: "",
    onyomi: "",
    kunyomi: "",
    jlptLevel: "",
    notes: "",
  });

  // only update the state of the field that is change.
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // onAdd is a function prop that stores addKanji() from App.js that add the data into database
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...form,
      onyomi: form.onyomi.split(",").map((s) => s.trim()),
      kunyomi: form.kunyomi.split(",").map((s) => s.trim()),
      isLearned: false,
    });
    setForm({
      kanji: "",
      meaning: "",
      onyomi: "",
      kunyomi: "",
      jlptLevel: "",
      notes: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      {["kanji", "meaning", "onyomi", "kunyomi", "jlptLevel", "notes"].map(
        (field) => (
          <TextField
            key={field}
            label={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        )
      )}
      <Button type="submit" variant="contained" color="primary">
        Add Kanji
      </Button>
    </Box>
  );
};

export default KanjiForm;
