import { Box, Group, Input, InputProps } from "@chakra-ui/react";
import { InputHTMLAttributes, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchInput.module.css";

interface props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.form}
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        ref={ref}
        placeholder={` search games ... `}
        w="full"
        borderRadius={20}
        onChange={(e) => onSearch(e.currentTarget.value)}
      ></Input>
    </form>
  );
};

export default SearchInput;
