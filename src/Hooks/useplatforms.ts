import { useQuery } from "@tanstack/react-query";
import { platforms } from "../Data/Platforms";
import apiClient, { fechResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiReq = new apiClient<Platform>("/platforms/lists/parents");
const useplatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiReq.getAll,

    staleTime: 24 * 60 * 60 * 1000,
    initialData: {
      count: platforms.results.length,
      results: platforms.results,
    },
  });

export default useplatforms;
