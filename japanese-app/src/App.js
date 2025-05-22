import React, { useState, useEffect } from "react";
import KanjiForm from "./components/KanjiForm";
import KanjiList from "./components/KanjiList";
import { Container, Typography } from "@mui/material";
import {
  fetchKanji,
  createKanji,
  deleteKanji as apiDeleteKanji,
} from "./api/kanjiApi";

function App() {
  const [kanjiList, setKanjiList] = useState([]);

  // run only when the page first rendered / component mount, since there is no dependency []
  useEffect(() => {
    const loadKanji = async () => {
      try {
        const response = await fetchKanji();
        setKanjiList(response.data);
      } catch (err) {
        console.error("Failed to fetch kanji:", err);
      }
    };
    loadKanji();
  }, []);

  const addKanji = async (kanji) => {
    try {
      const response = await createKanji(kanji);
      setKanjiList([...kanjiList, response.data]);
    } catch (err) {
      console.error("Failed to add kanji:", err);
    }
  };

  const deleteKanji = async (id) => {
    try {
      await apiDeleteKanji(id);
      // update the state of the kanji list without the removed kanji
      setKanjiList(kanjiList.filter((k) => k._id !== id));
    } catch (err) {
      console.error("Failed to delete kanji:", err);
    }
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Kanji Tracker
      </Typography>
      <KanjiForm onAdd={addKanji} />
      <KanjiList kanjiList={kanjiList} onDelete={deleteKanji} />
    </Container>
  );
}

export default App;
