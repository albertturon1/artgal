import { z, defineCollection } from "astro:content";

export const culturesCollection = defineCollection({
  schema: z.object({
    cultures: z.string().array(),
  }),
});

const artistSchema = z.object({
  id: z.number(),
  description: z.string(),
});

export type ArtistSchema = z.infer<typeof artistSchema>;

export const artistCollection = defineCollection({
  schema: z.object({
    artists: z.array(artistSchema),
  }),
});

export const collections = {
  cultures: culturesCollection,
  artists: artistCollection,
};
