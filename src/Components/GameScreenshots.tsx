import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import usescreenshots from "../Hooks/usescreenshots";

interface props {
  id: number;
}

const GameScreenshots = ({ id }: props) => {
  const { data, error, isLoading } = usescreenshots(id);
  if (isLoading) return null;
  if (error) throw error;
  if (!data || data.results.length === 0) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {data.results.map((screenshot) => (
        <GridItem key={screenshot.id}>
          <Image src={screenshot.image}></Image>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
