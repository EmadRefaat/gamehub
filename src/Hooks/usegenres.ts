import { fechResponse } from "./../services/api-client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";
import Genres from "../Data/Genres";

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
    initialData: { count: Genres.length, results: Genres },
    staleTime: 24 * 60 * 60 * 1000,
  });
};
export default usegenres;
