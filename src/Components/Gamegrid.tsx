import { Box } from "@chakra-ui/react";
import useGames from "../Hooks/usegames";

const Gamegrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Box>{error}</Box>}

      <ul>{games?.map((game) => <li key={game.id}>{game.name}</li>)}</ul>
    </>
  );
};

export default Gamegrid;
