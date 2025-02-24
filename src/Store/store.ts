import { create } from "zustand";

interface Gamequery {
  genre_id?: number;
  platform_id?: number;
  sort?: string;
  searchText?: string;
}

interface GamequeryStore {
  gamequery: Gamequery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platfomId: number) => void;
  setSort: (sort: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGamequeryStore = create<GamequeryStore>((Set) => ({
  gamequery: {},
  setSearchText: (searchText) => Set(() => ({ gamequery: { searchText } })),
  setGenreId: (genre_id) =>
    Set((store) => ({ gamequery: { ...store.gamequery, genre_id } })),
  setPlatformId: (platfomId) =>
    Set((store) => ({
      gamequery: { ...store.gamequery, platform_id: platfomId },
    })),
  setSort: (sort) =>
    Set((store) => ({ gamequery: { ...store.gamequery, sort } })),
}));

export default useGamequeryStore;
