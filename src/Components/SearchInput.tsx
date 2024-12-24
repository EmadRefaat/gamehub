import { Box, Group, Input, InputProps } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
  return (
    <Input
      placeholder={` search games ... `}
      w="full"
      borderRadius={20}
    ></Input>
  );
};

export default SearchInput;
