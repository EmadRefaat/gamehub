import {
  Box,
  Button,
  GridItem,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import useGames from "../Hooks/usegames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Gamequery } from "../App";
import React from "react";

interface props {
  gameQuery: Gamequery;
}
const Gamegrid = ({ gameQuery }: props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
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
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GridItem key={game.id}>
                <GameCard game={game}></GameCard>
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <IconButton
          variant={"outline"}
          p={5}
          my={5}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading ..." : "Load more"}
        </IconButton>
      )}
    </>
  );
};

export default Gamegrid;
