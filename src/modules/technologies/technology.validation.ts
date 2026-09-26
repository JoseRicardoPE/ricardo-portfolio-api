import { z } from 'zod';

import { TechnologyCategory } from './technology-category.enum.js';

export const technologySchema = z.object({
    name: z.string().trim().min(1).max(100),
    slug: z
        .string()
        .trim()
        .min(1)
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    category: z.enum(TechnologyCategory),
    icon: z.string().trim().max(255).optional(),
    order: z.number().int().min(0),
    isActive: z.boolean(),
});

export const technologyQuerySchema = z.object({
    category: z.enum(TechnologyCategory).optional(),
});
