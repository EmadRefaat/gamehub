import { CardBody, CardHeader, CardRoot, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <>
      <CardRoot h={"300px"} w={"300px"} overflow={"hidden"}>
        <CardHeader>
          <Skeleton></Skeleton>
        </CardHeader>
        <CardBody>
          <SkeletonText noOfLines={3}></SkeletonText>
        </CardBody>
      </CardRoot>
    </>
  );
};

export default SkeletonCard;
