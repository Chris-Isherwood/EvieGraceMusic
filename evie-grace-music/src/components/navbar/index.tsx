"use client";

import { createClient } from "next-sanity";
import DesktopNavbar from "./desktop";
import MobileNavbar from "./mobile";
import { Box } from "@chakra-ui/react";

const Navbar = async () => {
  const { navItems } = await getData();

  return (
    <Box p={"2vh"}>
      <DesktopNavbar navItems={navItems} />
      <MobileNavbar navItems={navItems} />
    </Box>
  );
};

const client = createClient({
  projectId: "ua4wmtqs",
  dataset: "production",
  apiVersion: "2023-06-25",
  useCdn: false,
});

const getData = async () => {
  const navItems = await client.fetch(`*[ _type == "navItem"]`);

  return { navItems };
};

export default Navbar;
