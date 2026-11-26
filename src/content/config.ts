import { defineCollection, reference, z } from 'astro:content';
import { LOCALES } from '../i18n/config';

// 10 project case studies per the Lean MVP quote (Phase 5).
export const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      sector: z.string().optional(),
      service: z.string().optional(),
      year: z.string().optional(),
      location: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().optional(),
      datePublished: z.string().optional(),
      dateModified: z.string().optional(),
      order: z.number().default(99),
      locale: z.enum(LOCALES),
      translationKey: z.string(),
      editorialLabel: z.string().optional(),
      supportLine: z.string().optional(),
      figures: z.array(z.string()).optional(),
      missingAssetNote: z.string().optional(),
    }),
});

// Reusable content pages if the client wants to extend beyond the 10 hardcoded templates later.
export const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    locale: z.enum(LOCALES),
    translationKey: z.string(),
  }),
});

export const collections = { projects, pages };
