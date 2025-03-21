import { useParams } from "react-router-dom";
import usegame from "../Hooks/usegame";
import { FiLoader } from "react-icons/fi";
import { GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ExpandText from "../Components/ExpandText";
import DifinitionItem from "../Components/DifinitionItem";
import CriticScore from "../Components/CriticScore";
import GameAttribute from "../Components/GameAttribute";
import usegametrailer from "../Hooks/usegametrailer";
import GameTrailer from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

const GameDetails = () => {
  const { slug } = useParams();
  const { isLoading, data: game, error } = usegame(slug!);

  if (isLoading) return <FiLoader />;
  if (error || !game) throw new Error();

  return (
    <>
      <SimpleGrid gap={2} columns={{ md: 2, base: 1 }}>
        <GridItem>
          <Heading> {game?.name}</Heading>
          <ExpandText>{game?.description_raw || ""}</ExpandText>
          <GameAttribute game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots id={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetails;
