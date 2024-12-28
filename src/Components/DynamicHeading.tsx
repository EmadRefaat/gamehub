import { Gamequery } from "../App";
import { Heading } from "@chakra-ui/react";
interface props {
  gameQuery: Gamequery;
}
const DynamicHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}  Game`;
  return <Heading my={"5"}>{heading}</Heading>;
};

export default DynamicHeading;
