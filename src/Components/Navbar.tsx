import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} p="10px">
        <Box>
          <Image src={logo} boxSize={"60px"}></Image>
        </Box>
        <Box>
          <ColorModeButton></ColorModeButton>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
