import {
  Box,
  Button,
  Icon,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import useplatforms from "../Hooks/useplatforms";
import { Platform } from "../Hooks/useplatforms";

interface props {
  onselectedPlatform: (Platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onselectedPlatform,
  selectedPlatformId,
}: props) => {
  const { data, error } = useplatforms();
  const selectedPlatform = data.results.find(
    (platform) => platform.id == selectedPlatformId
  );
  if (error) return null;
  return (
    <>
      <Box position="relative">
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline">
              {selectedPlatform ? selectedPlatform.name : "platforms"}
              <Icon>
                <FaAngleDown />
              </Icon>
            </Button>
          </MenuTrigger>
          <MenuContent position="absolute" mt={2}>
            {data?.results.map((p) => (
              <MenuItem
                onClick={() => onselectedPlatform(p)}
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
