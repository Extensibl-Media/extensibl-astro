import { z, defineCollection } from "astro:content";

// const blogCollection = defineCollection({
//   type:'content',
//   schema: z.object({
//     title
//   })
// })

const serviceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    name: z.string(),
    shortDesc: z.string(),
    description: z.string(),
    headingImage: z.object({
      mobile: z.string(),
      desktop: z.string(),
    }),
    icon: z.string(),
    benefits: z.array(z.string()),
    scope: z.array(z.string()),
  }),
});

export const collections = {
  services: serviceCollection,
};
