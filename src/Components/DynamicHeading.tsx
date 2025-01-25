import { Heading } from "@chakra-ui/react";
import { Gamequery } from "../App";
import usePlatform from "../Hooks/usePlatform";
import usegenre from "../Hooks/usegenre";
interface props {
  gameQuery: Gamequery;
}
const DynamicHeading = ({ gameQuery }: props) => {
  const platform = usePlatform(gameQuery.platform_id);
  const genre = usegenre(gameQuery.genre_id);
  const heading = `${platform?.name || ""} ${genre?.name || ""}  Game`;
  return <Heading my={"5"}>{heading}</Heading>;
};

export default DynamicHeading;
