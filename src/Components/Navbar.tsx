import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} p="10px">
        <Box>
          <NavLink to="/">
            <Image src={logo} boxSize={"60px"} objectFit={"cover"}></Image>
          </NavLink>
        </Box>
        <SearchInput></SearchInput>
        <Box>
          <ColorModeButton></ColorModeButton>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
