import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
  item: string;
  children: ReactNode | ReactNode[];
}

const DifinitionItem = ({ item, children }: props) => {
  return (
    <Box my={5}>
      <Heading as="dt" color={"gray.400"}>
        {item}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DifinitionItem;
