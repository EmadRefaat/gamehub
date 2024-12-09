import { useState } from "react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/Gamegrid";
import GenreList from "./Components/GenreList";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Grid
        gridTemplateAreas={{
          base: `"nav nav" "main main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <Navbar></Navbar>
        </GridItem>

        <GridItem display={{ base: "none", lg: "block" }} area={"aside"}>
          <GenreList></GenreList>
        </GridItem>

        <GridItem area={"main"}>
          <Gamegrid></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
