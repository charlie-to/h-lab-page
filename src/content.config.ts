import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "**/**/*.md", base: "./src/content/news/" }),
  schema: z.object({
    title: z.string(),
    lead: z.string(),
    date: z.date(),
  }),
});

const members = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/member/" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      name_en: z.string().optional(),
      image: image().optional(),
      history: z
        .array(
          z.object({
            year: z.number(),
            content: z.array(z.string()),
          }),
        )
        .optional(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { news, members };
