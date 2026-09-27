import { z } from 'zod';
import { localizedTextValidationSchema } from '../../shared/validations/localized-text.validation.js';

const objectIdSchema = z.string().regex(/^[a-f\d]{24}$/i, 'Invalid project ID');

export const caseStudyValidation = z.object({
    project: objectIdSchema,
    context: localizedTextValidationSchema,
    role: localizedTextValidationSchema,
    goal: localizedTextValidationSchema,
    architecture: localizedTextValidationSchema,
    challenges: localizedTextValidationSchema,
    solution: localizedTextValidationSchema,
    results: localizedTextValidationSchema,
});

export const caseStudySlugSchema = z.object({
    slug: z
        .string()
        .trim()
        .min(1)
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
});
