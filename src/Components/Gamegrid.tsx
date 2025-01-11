import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/usegames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Gamequery } from "../App";

interface props {
  gameQuery: Gamequery;
}
const Gamegrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Box>{error.message}</Box>}

      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap={"15px"}>
        {isLoading &&
          skeletonItems.map((item) => (
            <GridItem key={item}>
              <SkeletonCard></SkeletonCard>
            </GridItem>
          ))}
        {data?.results.map((game) => (
          <GridItem key={game.id}>
            <GameCard game={game}></GameCard>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Gamegrid;
