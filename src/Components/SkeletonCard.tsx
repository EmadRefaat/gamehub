import { CardBody, CardHeader, CardRoot, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./skeleton";
import GameCardContainer from "./GameCardContainer";

const SkeletonCard = () => {
  return (
    <>
      <GameCardContainer>
        <CardRoot h={"300px"}>
          <CardHeader>
            <Skeleton></Skeleton>
          </CardHeader>
          <CardBody>
            <SkeletonText noOfLines={3}></SkeletonText>
          </CardBody>
        </CardRoot>
      </GameCardContainer>
    </>
  );
};

export default SkeletonCard;
