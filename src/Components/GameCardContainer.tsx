import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  children: React.ReactNode;
}
const GameCardContainer = ({ children }: props) => {
  return (
    <Box
      borderRadius={"10px"}
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.05)" }}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
