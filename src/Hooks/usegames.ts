import useData from "./useData";
import { genre } from "./usegenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, error, isloading } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
  return { data, error, isloading };
};

export default useGames;
