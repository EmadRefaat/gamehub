import { useQuery } from "@tanstack/react-query";
import { platforms } from "../Data/Platforms";
import apiClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiReq = new apiClient<Platform>("/platforms/lists/parents");
const useplatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiReq.getAll,

    staleTime: ms("1d"),
    initialData: {
      count: platforms?.results.length,
      results: platforms?.results,
      next: null,
    },
  });

export default useplatforms;
