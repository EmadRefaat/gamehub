import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DifinitionItem from "./DifinitionItem";

interface props {
  game: Game;
}

const GameAttribute = ({ game }: props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DifinitionItem item="platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DifinitionItem>
      <DifinitionItem item="Genres">
        {game?.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)}
      </DifinitionItem>
      <DifinitionItem item="Meta score">
        <CriticScore metacritic={game.metacritic}></CriticScore>
      </DifinitionItem>
      <DifinitionItem item="publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DifinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
