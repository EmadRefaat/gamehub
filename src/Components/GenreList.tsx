import usegenres from "../Hooks/usegenres";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import getCropedImageUrl from "../services/img-url";
import useGamequeryStore from "../Store/store";

const GenreList = () => {
  const { data, error, isLoading } = usegenres();
  const { gamequery, setGenreId } = useGamequeryStore();

  if (isLoading)
    return (
      <>
        <Skeleton
          height="20"
          loading={isLoading}
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
        {data?.results.map((genre) => (
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
                onClick={() => setGenreId(genre.id)}
                variant={"plain"}
                fontSize={genre.id === gamequery.genre_id ? "lg" : ""}
                color={genre.id === gamequery.genre_id ? "gray.400" : ""}
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
