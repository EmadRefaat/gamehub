import useData from "./useData";

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

const useGames = () => {
  const { data, error, isloading } = useData<Game>("/games");
  return { data, error, isloading };
};

export default useGames;
