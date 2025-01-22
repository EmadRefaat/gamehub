import { CardBody, CardHeader, CardRoot, Skeleton } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";
import { SkeletonText } from "./skeleton";

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
