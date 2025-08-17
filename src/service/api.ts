import { Alert } from "react-native";
import * as Network from "expo-network";
import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: process.env.EXPO_PUBLIC_TMDB_API_KEY,
		language: "pt-BR",
	},
});

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
		const netState = await Network.getNetworkStateAsync();
		if (!netState.isConnected) {
			Alert.alert("Erro", "Sem conexão com a internet.");
			return [];
		}

		console.log("Buscando filmes populares...");
		const response = await api.get("/movie/popular");
		return response.data.results;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Erro ao buscar filmes:", error.message);
			Alert.alert("Erro", error.message);
		} else {
			console.error("Erro desconhecido:", error);
			Alert.alert("Erro", "Erro inesperado");
		}
		return [];
	}
}

// Buscar detalhes de um filme
export async function getMovieDetails(id: number) {
	try {
		const netState = await Network.getNetworkStateAsync();
		if (!netState.isConnected) {
			Alert.alert("Erro", "Sem conexão com a internet.");
			return null;
		}

		console.log(`Buscando detalhes do filme ${id}...`);
		const response = await api.get(`/movie/${id}`);
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Erro ao buscar detalhes:", error.message);
			Alert.alert("Erro", error.message);
		} else {
			console.error("Erro desconhecido:", error);
			Alert.alert("Erro", "Erro inesperado");
		}
		return null;
	}
}

// Buscar filmes favoritos
export async function getFavoriteMovies(favoriteIds: number[] = []) {
	try {
		const netState = await Network.getNetworkStateAsync();
		if (!netState.isConnected) {
			Alert.alert("Erro", "Sem conexão com a internet.");
			return [];
		}

		if (!favoriteIds.length) {
			console.log("Nenhum filme favorito encontrado.");
			return [];
		}

		console.log(`Buscando filmes favoritos: ${favoriteIds.join(", ")}`);
		const promises = favoriteIds.map((id) => api.get(`/movie/${id}`));
		const responses = await Promise.all(promises);

		return responses.map((res) => res.data);
	} catch (error) {
		if (error instanceof Error) {
			console.error("Erro ao buscar favoritos:", error.message);
			Alert.alert("Erro", error.message);
		} else {
			console.error("Erro desconhecido:", error);
			Alert.alert("Erro", "Erro inesperado");
		}
		return [];
	}
}
