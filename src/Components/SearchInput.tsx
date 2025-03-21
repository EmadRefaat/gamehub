import { Input } from "@chakra-ui/react";
import { useRef } from "react";
import styles from "./SearchInput.module.css";
import useGamequeryStore from "../Store/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const { setSearchText } = useGamequeryStore();
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <Input
        ref={ref}
        placeholder={` search games ... `}
        w="full"
        borderRadius={20}
      ></Input>
    </form>
  );
};

export default SearchInput;
