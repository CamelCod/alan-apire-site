import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { LOCALES } from './i18n/config';

// Only cases with approved sources, scope, role and year can generate public routes.
export const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      sector: z.string().optional(),
      service: z.string().optional(),
      year: z.string().optional(),
      scope: z.string().optional(),
      role: z.string().optional(),
      location: z.string().optional(),
      cover: image().optional(),
      coverUrl: z.enum([
        '/images/projects/project-pump-room-400.webp',
        '/images/projects/project-power-plant-400.webp',
        '/images/projects/project-process-plant-400.webp',
        '/images/projects/project-clarifier-400.webp',
      ]).optional(),
      coverAlt: z.string().optional(),
      coverCaption: z.string().optional(),
      datePublished: z.string().optional(),
      dateModified: z.string().optional(),
      order: z.number().default(99),
      evidenceStatus: z.enum(['pending', 'verified']).default('pending'),
      sourceRecord: z.string().optional(),
      locale: z.enum(LOCALES),
      translationKey: z.string(),
      editorialLabel: z.string().optional(),
      supportLine: z.string().optional(),
      figures: z.array(z.string()).optional(),
      missingAssetNote: z.string().optional(),
    }),
});

export const collections = { projects };
