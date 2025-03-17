import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface props {
  children: string;
}
const ExpandText = ({ children }: props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const result = expanded ? children : children.slice(0, limit) + "...";

  return (
    <Text>
      {result}
      <Button
        ms="1"
        fontSize="xs"
        fontWeight="bold"
        bg="yellow "
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "show less" : "show more"}
      </Button>
    </Text>
  );
};

export default ExpandText;
