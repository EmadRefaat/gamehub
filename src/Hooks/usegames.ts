import { useQuery } from "@tanstack/react-query";
import { Gamequery } from "./../App";
import apiClient from "../services/api-client";
import { fechResponse } from "../services/api-client";
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
  rating_top: number;
}

const useGames = (gamequery: Gamequery) =>
  useQuery<fechResponse<Game>, Error>({
    queryKey: ["games", gamequery],
    queryFn: () =>
      apiClient
        .get<fechResponse<Game>>("/games", {
          params: {
            genres: gamequery.genre?.id,
            parent_platforms: gamequery.platform?.id,
            ordering: gamequery.sort,
            search: gamequery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
