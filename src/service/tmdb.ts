import api from "../service/api";
import NetInfo from "@react-native-community/netinfo";

// Buscar todos os filmes populares
export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  release_date: string;
}
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
    // Pode customizar mensagem para o usuário
    throw new Error(error.message || "Erro ao buscar filmes.");
  }
}

export async function getMovieDetails(id: number) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY&language=pt-BR`);
    const data = await response.json();
    return data;
}

// Buscar filmes favoritos
export async function getFavoriteMovies(favoriteIds = []) {
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
  } catch (error) {
    console.error("Erro ao buscar filmes favoritos:", error.message);
    return [];
  }
}
