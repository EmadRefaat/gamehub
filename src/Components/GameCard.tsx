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

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <>
      <CardRoot>
        <GameCardContainer>
          <Box h={"180px"} overflow={"hidden"}>
            <Image
              fit={"contain"}
              src={getCropedImageUrl(game.background_image)}
            ></Image>
          </Box>
          <CardTitle fontSize={"sm"} p={"3"}>
            {game.name}
          </CardTitle>
          <CardBody>
            <HStack justifyContent={"space-between"} color={"gray.500"}>
              <PlatformIcon
                platform={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIcon>
              <CriticScore metacritic={game.metacritic}></CriticScore>
            </HStack>
          </CardBody>
        </GameCardContainer>
      </CardRoot>
    </>
  );
};

export default GameCard;
