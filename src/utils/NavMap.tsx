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
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Our Work",
      path: "/portfolio",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ],
  cta: {
    primary: { title: "Get Started", path: "#" },
    secondary: { title: "Log In", path: "#" },
  },
};
