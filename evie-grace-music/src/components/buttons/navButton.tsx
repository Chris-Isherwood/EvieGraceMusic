import { Button, Link } from "@chakra-ui/react";

const NavButton = ({ text, href }: { text: string; href: string }) => (
  <Button
    key={text}
    variant="outline"
    type="button"
    color="white"
    _hover={{
      bg: "white",
      color: "black",
    }}
  >
    <Link href={href} _hover={{ textDecoration: "none" }}>
      {text}
    </Link>
  </Button>
);

export default NavButton;
