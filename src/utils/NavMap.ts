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
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Our Work",
      path: "/portfolio",
    },
    // {
    //   title: "Our Experts",
    //   path: "/who-we-are",
    // },
    {
      title: "Join Our Team",
      path: "https://extensiblmedia.typeform.com/to/wyYIeQcy",
    },
  ],
  cta: {
    primary: {
      title: "Get Started",
      path: "https://calendly.com/extensibl-media/discovery-call",
    },
  },
  footer: {
    "Quick Links": [
      { title: "Pricing", path: "/pricing" },
      // {
      //   title: "Scope Of Work",
      //   path: "/scope",
      // },
      {
        title: "Our Work",
        path: "/portfolio",
      },
      {
        title: "Join the Team",
        path: "https://extensiblmedia.typeform.com/to/wyYIeQcy",
      },
    ],
    resources: [
      {
        title: "Our Blog",
        path: "/blog",
      },
      {
        title: "Guides",
        path: "/guides",
      },
      {
        title: "Products",
        path: "/products",
      },
      // {
      //   title: "FAQ",
      //   path: "/faq",
      // },
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
