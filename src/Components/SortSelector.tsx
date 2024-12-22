import {
  Box,
  Button,
  Icon,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const SortSelector = () => {
  return (
    <>
      <Box position={"relative"}>
        <MenuRoot>
          <MenuTrigger>
            <Button variant="outline">
              Order by:Relevance
              <Icon>
                <FaAngleDown />
              </Icon>
            </Button>
          </MenuTrigger>
          <MenuContent position={"absolute"} mt={2}>
            <MenuItem value="Relevance">Relevance</MenuItem>
            <MenuItem value="Date added">Date added</MenuItem>
            <MenuItem value="Name">Name</MenuItem>
            <MenuItem value="Release Date">Release Date</MenuItem>
            <MenuItem value="Popularity">Popularity</MenuItem>
            <MenuItem value="Average reating">Average reating</MenuItem>
          </MenuContent>
        </MenuRoot>
      </Box>
    </>
  );
};

export default SortSelector;
