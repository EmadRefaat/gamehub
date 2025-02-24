import { Heading } from "@chakra-ui/react";
import usePlatform from "../Hooks/usePlatform";
import usegenre from "../Hooks/usegenre";
import useGamequeryStore from "../Store/store";
const DynamicHeading = () => {
  const genreID = useGamequeryStore((s) => s.gamequery.genre_id);
  const genre = usegenre(genreID);

  const platformID = useGamequeryStore((s) => s.gamequery.platform_id);
  const platform = usePlatform(platformID);

  const heading = `${platform?.name || ""} ${genre?.name || ""}  Game`;
  return <Heading my={"5"}>{heading}</Heading>;
};

export default DynamicHeading;
