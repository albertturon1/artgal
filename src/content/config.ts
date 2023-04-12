import { z, defineCollection } from "astro:content";

export const culturesCollection = defineCollection({
  schema: z.object({
    cultures: z.string().array(),
  }),
});

export const collections = {
  cultures: culturesCollection,
};
