import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";
import DynamicHeading from "../Components/DynamicHeading";
import Gamegrid from "../Components/Gamegrid";
import GenreList from "../Components/GenreList";
import Navbar from "../Components/Navbar";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

const HomePage = () => {
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: ` "main main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem
          display={{ base: "none", lg: "block" }}
          p="2.5"
          area={"aside"}
        >
          <GenreList></GenreList>
        </GridItem>

        <GridItem area={"main"}>
          <Box p={2}>
            <DynamicHeading></DynamicHeading>
            <HStack gap={"5"} mb={"5"}>
              <PlatformSelector></PlatformSelector>
              <SortSelector></SortSelector>
            </HStack>
            <Gamegrid></Gamegrid>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
