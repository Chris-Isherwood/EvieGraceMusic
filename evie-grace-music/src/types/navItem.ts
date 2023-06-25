export type NavItem = {
  order: number;
  text: string;
  type: "dropdown" | "link";
  href: string;
  parent?: string;
};
