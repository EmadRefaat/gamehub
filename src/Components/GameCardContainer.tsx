import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box width={"300px"} h={"300px"} borderRadius={"10px"} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
