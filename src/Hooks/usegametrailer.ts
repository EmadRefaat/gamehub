import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { GameTrailer } from "../entities/gametrailer";

const usegametrailer = (id: number) => {
  const api = new apiClient<GameTrailer>(`/games/${id}/movies`);
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => api.getAll({}),
  });
};

export default usegametrailer;
