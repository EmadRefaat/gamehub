import { useQuery } from "@tanstack/react-query";
import { Gamequery } from "./../App";
import apiClient, { fechResponse } from "../services/api-client";
import { Platform } from "./useplatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiReq = new apiClient<Game>("/games");

const useGames = (gamequery: Gamequery) =>
  useQuery<fechResponse<Game>, Error>({
    queryKey: ["games", gamequery],
    queryFn: () =>
      apiReq.getAll({
        params: {
          genres: gamequery.genre?.id,
          parent_platforms: gamequery.platform?.id,
          ordering: gamequery.sort,
          search: gamequery.searchText,
        },
      }),
    // .get<fechResponse<Game>>("/games", {
    // })
    // .then((res) => res.data),
  });

export default useGames;
