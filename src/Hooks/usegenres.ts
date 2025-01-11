import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";
import { fechResponse } from "./useData";
import Genres from "../Data/Genres";
export interface genre {
  id: number;
  name: string;
  image_background: string;
}

// const usegenres = () => ({ data: Genres, isloading: false, error: null });
const usegenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<fechResponse<genre>>("genres").then((res) => res.data),
    initialData: { count: Genres.length, results: Genres },
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default usegenres;
