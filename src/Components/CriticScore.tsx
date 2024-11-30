import { Badge } from "@chakra-ui/react";

interface props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: props) => {
  let color = metacritic > 75 ? "green" : metacritic > 45 ? "yellow" : "red";

  return (
    <>
      <Badge color={color}>{metacritic}</Badge>
    </>
  );
};

export default CriticScore;
