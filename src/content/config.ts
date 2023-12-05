import { z, defineCollection, reference } from "astro:content";

const scopeCollection = defineCollection({
  type: "data",
  schema: z.object({
    turnaround: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
    platforms: z.array(z.string()),
  }),
});

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
    headline: z.string().optional(),
    pricing: z.array(
      z.object({
        title: z.string(),
        type: z.string(),
        price: z.number(),
        headline: z.string(),
        description: z.string(),
        includes: z.array(z.string()),
        link: z.string(),
      })
    ),
    process: z.object({
      title: z.string(),
      supportingText: z.string(),
      image: z.object({
        mobile: z.string(),
        desktop: z.string(),
      }),
      steps: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
    category: z.string(),
    tags: z.array(z.string().optional()),
    author: reference("authors"),
    images: z.object({
      thumbnail: z.string(),
      banner: z.string(),
    }),
    relatedPosts: z.array(reference("articles")).optional(),
  }),
});

// const tagsCollection = defineCollection({
//   type: "data",
//   schema: z.object({
//     name: z.string(),
//   }),
// });

// const categoryCollection = defineCollection({
//   type: "data",
//   schema: z.object({
//     name: z.string(),
//   }),
// });

const authorsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    links: z.object({
      portfolio: z.string().optional(),
      twitter: z.string().optional(),
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      dribbble: z.string().optional(),
    }),
  }),
});

const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    headline: z.string(),
    title: z.string(),
    releaseDate: z.number(),
    category: z.string(),
    client: z.string(),
    url: z.string().optional(),
    images: z.object({
      thumbnail: z.string(),
      banner: z.string(),
      otherImages: z.array(z.string()),
    }),
  }),
});

export const collections = {
  services: serviceCollection,
  articles: blogCollection,
  authors: authorsCollection,
  works: portfolioCollection,
  scopes: scopeCollection,
  // tags: tagsCollection,
  // categories: categoryCollection,
};
