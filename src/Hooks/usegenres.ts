import { useQuery } from "@tanstack/react-query";
import Genres from "../Data/Genres";
import apiClient from "../services/api-client";
import ms from "ms";

export interface genre {
  id: number;
  name: string;
  image_background: string;
}

const apiReq = new apiClient<genre>("/genres");
const usegenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiReq.getAll,
    initialData: { count: Genres.length, results: Genres, next: null },
    staleTime: ms("1d"),
  });
};
export default usegenres;
