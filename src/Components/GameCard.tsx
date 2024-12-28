import {
  Box,
  Card,
  CardBody,
  CardRoot,
  CardTitle,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../Hooks/usegames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCropedImageUrl from "../services/img-url";
import GameCardContainer from "./GameCardContainer";
import { useState } from "react";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <GameCardContainer>
        <CardRoot borderRadius={"10px"} overflow={"hidden"}>
          <Box overflow={"hidden"}>
            <Image
              fit="cover"
              src={getCropedImageUrl(game.background_image)}
            ></Image>
          </Box>
          <CardBody>
            <HStack justifyContent={"space-between"} mb="2" color={"gray.500"}>
              <PlatformIcon
                platform={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIcon>
              <CriticScore metacritic={game.metacritic}></CriticScore>
            </HStack>
            <CardTitle fontSize={"sm"}>
              {isVisible ? game.name : game.name.slice(0, 30)}{" "}
              {game.name.length > 30 && (
                <span onClick={() => toggleVisibility()}>...</span>
              )}
            </CardTitle>
          </CardBody>
        </CardRoot>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
