import { useState } from "react";
import "./App.css";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/Gamegrid";
import GenreList from "./Components/GenreList";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import DynamicHeading from "./Components/DynamicHeading";
import useGamequeryStore from "./Store/store";

function App() {
  const { gamequery } = useGamequeryStore();
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav nav" "main main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>

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
}

export default App;
