import { useParams } from "react-router-dom";
import usegame from "../Hooks/usegame";
import { FiLoader } from "react-icons/fi";
import { Heading, Text } from "@chakra-ui/react";

const GameDetails = () => {
  const { slug } = useParams();
  const { isLoading, data: game } = usegame(slug!);
  if (isLoading) return <FiLoader />;

  return (
    <>
      <Heading> {game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetails;
