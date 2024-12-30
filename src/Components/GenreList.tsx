import usegenres, { genre } from "../Hooks/usegenres";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import getCropedImageUrl from "../services/img-url";

interface props {
  onSelectedGenre: (genre: genre) => void;
  selectedGenre: genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: props) => {
  const { data, isloading, error } = usegenres();

  if (isloading)
    return (
      <>
        <Skeleton
          height="20"
          loading={isloading}
          variant="pulse"
          mb="10"
        ></Skeleton>
      </>
    );

  if (error) return null;
  return (
    <>
      <Heading fontSize="xl" px="5px" mb="3">
        Genres
      </Heading>
      <Box as="ul" listStyleType="none">
        {data?.map((genre) => (
          <Box as="li" key={genre.id} px="5px" overflow="hidden" mb="1">
            <HStack>
              <Box>
                <Image
                  objectFit="cover"
                  boxSize="30px"
                  borderRadius="5px"
                  src={getCropedImageUrl(genre.image_background)}
                ></Image>
              </Box>
              <Button
                whiteSpace="normal"
                textAlign="start"
                wordBreak="break-word"
                onClick={() => onSelectedGenre(genre)}
                variant={"plain"}
                fontSize={genre.id === selectedGenre?.id ? "lg" : ""}
                color={genre.id === selectedGenre?.id ? "gray.400" : ""}
              >
                {genre.name}
              </Button>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
