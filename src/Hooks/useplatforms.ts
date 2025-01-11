import { useQuery } from "@tanstack/react-query";
import { platforms } from "../Data/Platforms";
import apiClient from "../services/api-client";
import { fechResponse } from "../services/api-client";
import { Platform } from "./usegames";
const useplatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<fechResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: platforms.results.length,
      results: platforms.results,
    },
  });

export default useplatforms;
