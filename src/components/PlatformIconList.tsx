import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaXbox,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap :{ [key: string] : IconType } = {      //wraping in [ ] we are defining an index signature
    //name:PlayStation,
    //slug: playstation
    pc: FaWindows,
    playstaion: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>                                  //1 is 4px 
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500"/>      //if the icons are the same color as the heading it creates visual noise
      ))}
    </HStack>
  );
};

export default PlatformIconList;
