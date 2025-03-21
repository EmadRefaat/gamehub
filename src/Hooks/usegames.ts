import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient, { fechResponse } from "../services/api-client";
import ms from "ms";
import useGamequeryStore from "../Store/store";
import Game from "../entities/Game";

const apiReq = new apiClient<Game>("/games");

const useGames = () => {
  const { gamequery } = useGamequeryStore();
  return useInfiniteQuery<fechResponse<Game>, Error>({
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
    staleTime: ms("1d"),
    initialPageParam: 1,
  });
};

export default useGames;
