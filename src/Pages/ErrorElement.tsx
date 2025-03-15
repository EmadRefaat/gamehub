import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../Components/Navbar";

const ErrorElement = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={4}>
        <Heading>OOPS error</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "this page doesnot exist"
            : "something happen"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorElement;
