import { z } from 'zod';
import { ProjectCategory } from './project-category.enum.js';

export const projectSchema = z.object({
    title: z.string().trim().min(1).max(100),
    slug: z
        .string()
        .trim()
        .min(1)
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    shortDescription: z.string().trim().min(1).max(300),
    category: z.enum(ProjectCategory),
    technologies: z.array(z.string().regex(/^[a-f\d]{24}$/i, 'Invalid technology ID')).default([]),
    thumbnail: z.url().optional(),
    liveUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
    featured: z.boolean().default(false),
    isActive: z.boolean().default(true),
    order: z.number().int().min(0).default(0),
});

export const projectSlugSchema = z.object({
    slug: z
        .string()
        .trim()
        .min(1)
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
});
