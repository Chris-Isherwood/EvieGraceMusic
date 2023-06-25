"use client";

import {
  Flex,
  Button,
  ButtonGroup,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { NavItem } from "../../types/navItem";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { site_title } from "../../consts";
import NavMenuButton from "../buttons/navMenuButton";
import NavButton from "../buttons/navButton";

type Props = {
  navItems: NavItem[];
};

const DesktopNavbar = ({ navItems }: Props) => {
  const orderedNavItems = navItems.sort((a, b) => a.order - b.order);

  const topNavItems = orderedNavItems.filter(navItem => !navItem.parent);
  const subNavItems = orderedNavItems.filter(navItem => navItem.parent);

  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      w={"95vw"}
      align={"center"}
      justify={"space-between"}
      m={"auto"}
    >
      <Heading size="xl" color="white">
        {site_title}
      </Heading>
      <ButtonGroup gap={3}>
        {topNavItems.map(navItem =>
          navItem.type === "link" ? (
            <NavButton key={`NavButton_${navItem.text}`} {...navItem} />
          ) : (
            <Menu key={`Menu_${navItem.text}`}>
              <NavMenuButton text={navItem.text} />
              <MenuList>
                {subNavItems
                  .filter(s => s.parent === navItem.text)
                  .map(navItem => (
                    <MenuItem as="button" key={navItem.text}>
                      <Link href={navItem.href}>{navItem.text}</Link>
                    </MenuItem>
                  ))}
              </MenuList>
            </Menu>
          )
        )}
      </ButtonGroup>
    </Flex>
  );
};

export default DesktopNavbar;
