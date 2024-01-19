export const NavMap: {
  links: {
    title: string;
    path: string;
    children?: { title: string; path: string }[];
  }[];
  cta: {
    primary: { title: string; path: string };
    secondary?: { title: string; path: string };
  };
  footer: Record<
    string,
    Array<{
      title: string;
      path: string;
      children?: { title: string; path: string }[];
    }>
  >;
} = {
  links: [
    // {
    //   title: "About",
    //   path: "/about",
    // },
    {
      title: "What We Offer",
      path: "#services",
    },
    {
      title: "Pricing",
      path: "#pricing",
    },
    {
      title: "Our Work",
      path: "/portfolio",
    },
    // {
    //   title: "Join Our Team",
    //   path: "https://extensiblmedia.typeform.com/to/wyYIeQcy",
    // },
  ],
  cta: {
    primary: {
      title: "Get Started",
      path: "https://calendly.com/extensibl-media/discovery-call",
    },
  },
  footer: {
    Services: [
      {
        title: "Design & Development Subscriptions",
        path: "/",
      },
      {
        title: "Web Design For Local Business",
        path: "https://www.velocitywebstudio.com",
      },
    ],
    resources: [
      {
        title: "Our Blog",
        path: "/blog",
      },
      {
        title: "Products",
        path: "/products",
      },
    ],
    contact: [
      {
        title: "hello@extensiblmedia.com",
        path: "mailto:hello@extensiblmedia.com",
      },
      { title: "+1 (208) 696-1474", path: "tel:+12086961474" },
      {
        title: "Book a Discovery Call",
        path: "https://calendly.com/extensibl-media/discovery-call",
      },
    ],
  },
};
