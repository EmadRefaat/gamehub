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

interface props {
  onSelectSort: (selectedOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSort, sortOrder }: props) => {
  const sortList = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average reating" },
  ];

  const currentSortOrder = sortList.find((order) => order.value === sortOrder);
  return (
    <>
      <Box position={"relative"}>
        <MenuRoot>
          <MenuTrigger>
            <Button variant="outline">
              Order by:{currentSortOrder ? currentSortOrder.label : "Relevance"}
              <Icon>
                <FaAngleDown />
              </Icon>
            </Button>
          </MenuTrigger>
          <MenuContent position={"absolute"} mt={2}>
            {sortList.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                onClick={() => onSelectSort(item.value)}
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </Box>
    </>
  );
};

export default SortSelector;
