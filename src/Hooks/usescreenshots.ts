import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import Screanshot from "../entities/Screanshot";
const usescreenshots = (id: number) => {
  const api = new apiClient<Screanshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: () => api.getAll({}),
  });
};
export default usescreenshots;
