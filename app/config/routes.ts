export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    PROPERTIES: {
      LIST: "/properties",
      DETAIL: (id: string | number) => `/properties/${id}`,
    },
    INVESTMENTS: "/investments",
    INSIGHTS: {
      LIST: "/insights",
      DETAIL: (slug: string) => `/insights/${slug}`,
    },
    CONTACT: "/contact",
    LEGAL: {
      PRIVACY: "/privacy-policy",
      TERMS: "/terms-and-conditions",
      DISCLAIMER: "/disclaimer",
    },
  } as const;
  
  export const MAIN_NAV_LINKS = [
    { label: "Home", href: ROUTES.HOME },
    { label: "About", href: ROUTES.ABOUT },
    { label: "Services", href: ROUTES.SERVICES },
    { label: "Properties", href: ROUTES.PROPERTIES.LIST },
    { label: "Investments", href: ROUTES.INVESTMENTS },
    { label: "Insights", href: ROUTES.INSIGHTS.LIST },
  ];