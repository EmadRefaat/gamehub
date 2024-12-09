import usegenres from "../Hooks/usegenres";
import { Box, HStack, Image, Skeleton, Text } from "@chakra-ui/react";
import getCropedImageUrl from "../services/img-url";

const GenreList = () => {
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
