import { Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box p={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
