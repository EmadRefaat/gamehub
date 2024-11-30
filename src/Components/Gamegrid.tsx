import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/usegames";
import GameCard from "./GameCard";

const Gamegrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Box>{error}</Box>}
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={"10px"} p={"10px"}>
        {games?.map((game) => (
          <GridItem key={game.id}>
            <GameCard game={game}></GameCard>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
