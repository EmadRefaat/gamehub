import usegenres from "../Hooks/usegenres";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import getCropedImageUrl from "../services/img-url";

const GenreList = () => {
  const { data, isloading, error } = usegenres();
  return (
    <>
      <Box as="ul" listStyleType="none">
        {data?.map((genre) => (
          <Box as="li" key={genre.id} px="5px" overflow="hidden" mb="1">
            <HStack>
              <Box>
                <Image
                  boxSize="30px"
                  borderRadius="5px"
                  src={getCropedImageUrl(genre.image_background)}
                ></Image>
              </Box>
              <Text fontSize="xl">{genre.name}</Text>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
