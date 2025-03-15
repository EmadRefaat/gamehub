import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "./usegames";

const api = new apiClient<Game>("games");
const usegame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => api.get(slug),
  });

export default usegame;
