import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
    language: "pt-BR"
  }
});

// Tipagem do filme
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
}

// Buscar todos os filmes populares
export async function getPopularMovies(): Promise<Movie[]> {
  try {
    // Verifica se há internet
    const netState = await NetInfo.fetch();
    if (!netState.isConnected) {
      throw new Error("Sem conexão com a internet.");
    }

    console.log("Buscando filmes...");
    const response = await api.get("/movie/popular");
    console.log("Resposta da API:", response.data.results);
    return response.data.results;
  } catch (error: any) {
    console.error("Erro ao buscar filmes:", error.message);
    throw new Error(error.message || "Erro ao buscar filmes.");
  }
}

// Buscar detalhes de um filme
export async function getMovieDetails(id: number) {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar detalhes do filme:", error.message);
    throw new Error(error.message || "Erro ao buscar detalhes do filme.");
  }
}

// Buscar filmes favoritos
export async function getFavoriteMovies(favoriteIds: number[] = []) {
  try {
    console.log("Buscando filmes favoritos...");
    if (!favoriteIds.length) {
      console.log("Nenhum filme favorito encontrado.");
      return [];
    }

    console.log(`IDs de favoritos: ${favoriteIds.join(", ")}`);
    const promises = favoriteIds.map(id => api.get(`/movie/${id}`));
    const responses = await Promise.all(promises);

    const favoriteMovies = responses.map(res => res.data);
    console.log(`Foram encontrados ${favoriteMovies.length} filmes favoritos.`);
    return favoriteMovies;
  } catch (error: any) {
    console.error("Erro ao buscar filmes favoritos:", error.message);
    return [];
  }
}
