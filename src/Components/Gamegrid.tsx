import axios from "axios";
import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

interface game {
  id: number;
  name: string;
}

interface gamesData {
  count: number;
  results: game[];
}

const Gamegrid = () => {
  const [games, setGames] = useState<game[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<gamesData>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Box>{error}</Box>}

      <ul>{games?.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};

export default Gamegrid;
