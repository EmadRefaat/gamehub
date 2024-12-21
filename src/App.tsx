import { useState } from "react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/Gamegrid";
import GenreList from "./Components/GenreList";
import { genre } from "./Hooks/usegenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from "./Hooks/usegames";
export interface Gamequery {
  genre: genre | null;
  platform: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<Gamequery>({} as Gamequery);

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
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenreList>
        </GridItem>

        <GridItem area={"main"}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onselectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <Gamegrid gameQuery={gameQuery}></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
