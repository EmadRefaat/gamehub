import usegenres from "../Hooks/usegenres";
import { Box } from "@chakra-ui/react";
import { List as ChakraList, ListItem } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isloading, error } = usegenres();
  return (
    <>
      <Box as="ul">
        {data?.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </Box>
    </>
  );
};

export default GenreList;
