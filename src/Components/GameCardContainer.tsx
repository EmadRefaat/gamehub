import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box overflow={"hidden"} width={"300px"} h={"300px"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
