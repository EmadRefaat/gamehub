import meh from "../assets/meh.png";
import bullseye from "../assets/bullseye.png";
import thumbsUp from "../assets/thumbs.png";
import { Image, ImageProps } from "@chakra-ui/react";

const EmojeMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: meh },
  4: { src: bullseye, alt: bullseye },
  5: { src: thumbsUp, alt: thumbsUp },
};
interface props {
  rating_top: number;
}
const Emoji = ({ rating_top }: props) => {
  return <Image w="30px" {...EmojeMap[rating_top]}></Image>;
};

export default Emoji;
