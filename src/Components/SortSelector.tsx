import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import useGamequeryStore from "../Store/store";

const SortSelector = () => {
  const { setSort, gamequery } = useGamequeryStore();

  const sortList = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average reating" },
  ];

  const currentSortOrder = sortList.find(
    (order) => order.value === gamequery.sort
  );
  return (
    <>
      <Box position={"relative"}>
        <MenuRoot>
          <MenuTrigger>
            <Button variant="outline">
              Order by:{currentSortOrder ? currentSortOrder.label : "Relevance"}
              {/* <Icon>
                <FaAngleDown />
              </Icon> */}
            </Button>
          </MenuTrigger>
          <MenuContent position={"absolute"} mt={2}>
            {sortList.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                onClick={() => setSort(item.value)}
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
