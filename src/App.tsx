import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Gamegrid from "./Components/Gamegrid";

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
          Sidebar
        </GridItem>

        <GridItem area={"main"}>
          <Gamegrid></Gamegrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
