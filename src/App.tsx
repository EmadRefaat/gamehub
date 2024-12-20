import { useState } from "react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/Gamegrid";
import GenreList from "./Components/GenreList";
import { genre } from "./Hooks/usegenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/usegames";

function App() {
  const [count, setCount] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>

        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onselectedPlatform={(platform) => setSelectedPlatform(platform)}
          ></PlatformSelector>
          <Gamegrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          ></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
