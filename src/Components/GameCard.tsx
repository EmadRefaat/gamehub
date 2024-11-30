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

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <>
      <CardRoot overflow={"hidden"}>
        <Box h={"130px"} overflow={"hidden"}>
          <Image
            fit={"contain"}
            src={getCropedImageUrl(game.background_image)}
          ></Image>
        </Box>
        <CardTitle fontSize={"sm"}>{game.name}</CardTitle>
        <CardBody>
          <HStack justifyContent={"space-between"} color={"gray.500"}>
            <PlatformIcon
              platform={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIcon>
            <CriticScore metacritic={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </CardRoot>
    </>
  );
};

export default GameCard;
