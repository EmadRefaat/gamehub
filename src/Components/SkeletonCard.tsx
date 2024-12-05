import { CardBody, CardHeader, CardRoot, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./skeleton";
import GameCardContainer from "./GameCardContainer";

const SkeletonCard = () => {
  return (
    <>
      <CardRoot>
        <GameCardContainer>
          <CardHeader>
            <Skeleton></Skeleton>
          </CardHeader>
          <CardBody>
            <SkeletonText noOfLines={3}></SkeletonText>
          </CardBody>
        </GameCardContainer>
      </CardRoot>
    </>
  );
};

export default SkeletonCard;
