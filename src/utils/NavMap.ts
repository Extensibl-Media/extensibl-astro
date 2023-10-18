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
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "#",
      children: [
        { title: "Web Design", path: "/web-design" },
        {
          title: "Development for Startups",
          path: "/development-subscription",
        },
        { title: "SEO & Content", path: "/seo-content" },
        { title: "UI/UX Design", path: "/ui-ux-design" },
        { title: "Social Media Marketing", path: "/social-media" },
      ],
    },
    // {
    //   title: "Blog",
    //   path: "/blog",
    // },
    {
      title: "Our Work",
      path: "/work",
    },
    {
      title: "Contact",
      path: "/contact-us",
    },
  ],
  cta: {
    primary: { title: "Get Started", path: "/contact-us" },
    secondary: {
      title: "Log In",
      path: "http://extensiblmedia.manyrequests.io/",
    },
  },
  footer: {
    services: [
      { title: "Web Design", path: "/web-design" },
      {
        title: "Development Subscriptions",
        path: "/development-subscription",
      },
      { title: "SEO & Content", path: "/seo-content" },
      { title: "UI/UX Design", path: "/ui-ux-design" },
      { title: "Social Media Marketing", path: "/social-media" },
    ],
    links: [
      {
        title: "About",
        path: "/about",
      },
      // {
      //   title: "Our Blog",
      //   path: "/blog",
      // },
      {
        title: "Our Work",
        path: "/work",
      },
      {
        title: "Contact Us",
        path: "/contact-us",
      },
    ],
    contact: [
      {
        title: "extensiblmedia@gmail.com",
        path: "mailto:extensiblmedia@gmail.com",
      },
      { title: "+1 (208) 696-1474", path: "tel:+12086961474" },
      {
        title: "Book a Discovery Call",
        path: "https://calendly.com/richardsprins/discovery-call",
      },
    ],
  },
};
