import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { Game, Platform } from "../Hooks/usegames";
import { FaPlaystation, FaWindows } from "react-icons/fa";
import { TbDeviceDesktopCog } from "react-icons/tb";
import { FaXbox } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { FaAndroid } from "react-icons/fa";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";

import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface props {
  platform: Platform[];
}

const PlatformIcon = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: TbDeviceDesktopCog,
    xbox: FaXbox,
    mac: IoLogoApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {/* {platform.map((p) => (
        <Icon key={p.id} as={iconMap[p.slug]}></Icon>
      ))} */}
      <Text>
        {platform.map((p) => {
          const IconComponent = iconMap[p.slug]; // Resolve the icon
          if (!IconComponent) return null; // Handle missing icons gracefully
          return (
            <Icon ml={1} key={p.id}>
              <IconComponent />
            </Icon>
          );
        })}
      </Text>
    </>
  );
};

export default PlatformIcon;
