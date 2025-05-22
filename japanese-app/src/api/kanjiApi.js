import axios from "axios";

// base url for all the API
const API = axios.create({
  baseURL: "http://localhost:5000/api/kanji",
});

const fetchKanji = () => API.get("/");
const createKanji = (newKanji) => API.post("/", newKanji);
const deleteKanji = (id) => API.delete(`/${id}`);
const updateKanji = (id, updatedKanji) => API.put(`/${id}`, updatedKanji);

export { fetchKanji, createKanji, deleteKanji, updateKanji };
