import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { BiLoader } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
import { Gamequery } from "../App";
import useGames from "../Hooks/usegames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { FiLoader } from "react-icons/fi";

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
  const fechedGamesCount =
    data?.pages.reduce(
      (totalValue, current) => totalValue + current.results.length,
      0
    ) || 0;
  return (
    <>
      {error && <Box>{error.message}</Box>}
      <InfiniteScroll
        hasMore={hasNextPage}
        next={fetchNextPage}
        dataLength={fechedGamesCount}
        loader={<FiLoader></FiLoader>}
      >
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
      </InfiniteScroll>
    </>
  );
};

export default Gamegrid;
