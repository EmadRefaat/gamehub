import { useInfiniteQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<fechResponse<Game>, Error>({
    queryKey: ["games", gamequery],
    queryFn: ({ pageParam = 1 }) =>
      apiReq.getAll({
        params: {
          genres: gamequery.genre_id,
          parent_platforms: gamequery.platform_id,
          ordering: gamequery.sort,
          search: gamequery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
    initialPageParam: 1,
  });

export default useGames;
