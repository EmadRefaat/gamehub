import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

import useplatforms from "../Hooks/useplatforms";
import useGamequeryStore from "../Store/store";

const PlatformSelector = () => {
  const { setPlatformId, gamequery } = useGamequeryStore();
  const { data, error } = useplatforms();
  const selectedPlatform = data.results.find(
    (platform) => platform.id == gamequery.platform_id
  );
  if (error) return null;
  return (
    <>
      <Box position="relative">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline">
              {selectedPlatform ? selectedPlatform.name : "platforms"}
              {/* <Icon>
                <FaAngleDown />
              </Icon> */}
            </Button>
          </MenuTrigger>
          <MenuContent position="absolute" mt={2}>
            {data?.results.map((p) => (
              <MenuItem
                onClick={() => setPlatformId(p.id)}
                value={p.name}
                key={p.id}
              >
                {p.name}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </Box>
    </>
  );
};

export default PlatformSelector;
