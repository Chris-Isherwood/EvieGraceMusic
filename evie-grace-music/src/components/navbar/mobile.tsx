"use client";

import {
  Flex,
  Button,
  Icon,
  Stack,
  Heading,
  Drawer,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavItem } from "../../types/navItem";
import { site_title } from "../../consts";
import { useRef, useState } from "react";
import React from "react";

type Props = {
  navItems: NavItem[];
};

const MobileNavbar = ({ navItems }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // const orderedNavItems = navItems.sort((a, b) => a.order - b.order);

  // const topNavItems = orderedNavItems.filter(navItem => !navItem.parent);
  // const subNavItems = orderedNavItems.filter(navItem => navItem.parent);

  return (
    <>
      <Flex
        display={{ base: "flex", md: "none" }}
        w={"95vw"}
        align={"center"}
        justify={"space-between"}
        m={"auto"}
      >
        <Heading size="xl" color="white">
          {site_title}
        </Heading>
        <Button variant="ghost" onClick={() => setIsDrawerOpen(true)}>
          <Icon as={() => <RxHamburgerMenu size={"30"} color="white" />} />
        </Button>
      </Flex>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        size={"xs"}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => setIsDrawerOpen(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
