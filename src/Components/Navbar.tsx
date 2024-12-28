import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: props) => {
  return (
    <>
      <HStack justifyContent={"space-between"} p="10px">
        <Box>
          <Image src={logo} boxSize={"60px"}></Image>
        </Box>
        <SearchInput onSearch={onSearch}></SearchInput>
        <Box>
          <ColorModeButton></ColorModeButton>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
