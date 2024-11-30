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

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <>
      <CardRoot overflow={"hidden"}>
        <Box h={"130px"} overflow={"hidden"}>
          <Image fit={"contain"} src={game.background_image}></Image>
        </Box>
        <CardTitle fontSize={"sm"}>{game.name}</CardTitle>
        <CardBody>
          <HStack color={"gray.500"} mt={"0"}>
            <PlatformIcon
              platform={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIcon>
          </HStack>
        </CardBody>
      </CardRoot>
    </>
  );
};

export default GameCard;
