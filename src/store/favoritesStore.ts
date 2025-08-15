import { create } from 'zustand';
import { Movie } from '../service/tmdb';

type FavoritesStore = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],
  addFavorite: (movie) => {
    if (!get().favorites.find((fav) => fav.id === movie.id)) {
      set((state) => ({ favorites: [...state.favorites, movie] }));
    }
  },
  removeFavorite: (id) => {
    set((state) => ({ favorites: state.favorites.filter((fav) => fav.id !== id) }));
  },
  isFavorite: (id) => get().favorites.some((fav) => fav.id === id),
}));
