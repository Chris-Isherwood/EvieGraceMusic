import { Button, MenuButton } from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavMenuButton = ({ text }: { text: string }) => (
  <MenuButton
    as={Button}
    rightIcon={<RiArrowDropDownLine size={25} />}
    color={"white"}
    variant={"outline"}
    bg={"transparent"}
    _active={{
      color: "black",
    }}
    _hover={{
      color: "black",
      bg: "white",
    }}
    _expanded={{
      bg: "white",
      color: "black",
    }}
  >
    {text}
  </MenuButton>
);

export default NavMenuButton;
