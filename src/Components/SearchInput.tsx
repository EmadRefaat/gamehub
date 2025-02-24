import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import styles from "./SearchInput.module.css";
import useGamequeryStore from "../Store/store";

const SearchInput = () => {
  const { setSearchText } = useGamequeryStore();
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
        onChange={(e) => setSearchText(e.currentTarget.value)}
      ></Input>
    </form>
  );
};

export default SearchInput;
