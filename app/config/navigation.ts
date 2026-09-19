export interface NavItem {
    label: string;
    href: string;
  }
  
  export const NAV_LINKS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Properties", href: "/properties" },
    { label: "Investments", href: "/investments" },
    { label: "Insights", href: "/insights" },
  ];