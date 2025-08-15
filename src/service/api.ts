import axios from "axios";
import { TMDB_API_KEY } from "@env";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "2b759bac44435dd77c71b08c7a8261fa",
    language: "pt-BR"
  }
});

export default api;
