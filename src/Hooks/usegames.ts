import { Gamequery } from "./../App";
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

const useGames = (Gamequery: Gamequery) => {
  const { data, error, isloading } = useData<Game>(
    "/games",
    {
      params: {
        genres: Gamequery.genre?.id,
        platforms: Gamequery.platform?.id,
        ordering: Gamequery.sort,
      },
    },
    [Gamequery]
  );
  return { data, error, isloading };
};

export default useGames;
