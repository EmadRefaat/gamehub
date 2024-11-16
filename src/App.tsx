import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Grid, GridItem, Show, Text } from "@chakra-ui/react";

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
        <GridItem bg={"red"} area={"nav"}>
          navbar
        </GridItem>

        <GridItem
          display={{ base: "none", lg: "block" }}
          bg={"green"}
          area={"aside"}
        >
          Sidebar
        </GridItem>

        <GridItem bg={"blue"} area={"main"}>
          main{" "}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
