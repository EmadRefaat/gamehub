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

const PlatformSelector = () => {
  const { data, error } = useplatforms();

  return (
    <>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            Platforms{" "}
            <Icon>
              <FaAngleDown />
            </Icon>
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute">
          {data.map((p) => (
            <MenuItem value={p.name} key={p.id}>
              {p.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </>
  );
};

export default PlatformSelector;
