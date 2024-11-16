import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      <HStack>
        <Box>
          <Image src={logo} boxSize={"60px"}></Image>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
