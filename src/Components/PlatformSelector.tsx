import {
  Button,
  Icon,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import useplatforms from "../Hooks/useplatforms";
import { Platform } from "../Hooks/usegames";

interface props {
  onselectedPlatform: (Platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onselectedPlatform, selectedPlatform }: props) => {
  const { data, error } = useplatforms();
  if (error) return null;
  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            {selectedPlatform ? selectedPlatform.name : "platforms"}
            <Icon>
              <FaAngleDown />
            </Icon>
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute">
          {data.map((p) => (
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
    </>
  );
};

export default PlatformSelector;
