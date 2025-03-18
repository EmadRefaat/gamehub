import { useParams } from "react-router-dom";
import usegame from "../Hooks/usegame";
import { FiLoader } from "react-icons/fi";
import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ExpandText from "../Components/ExpandText";
import DifinitionItem from "../Components/DifinitionItem";
import CriticScore from "../Components/CriticScore";
import GameAttribute from "../Components/GameAttribute";

const GameDetails = () => {
  const { slug } = useParams();
  const { isLoading, data: game, error } = usegame(slug!);

  if (isLoading) return <FiLoader />;
  if (error || !game) throw new Error();

  return (
    <>
      <Heading> {game?.name}</Heading>
      <ExpandText>{game?.description_raw || ""}</ExpandText>
      <GameAttribute game={game} />
    </>
  );
};

export default GameDetails;
