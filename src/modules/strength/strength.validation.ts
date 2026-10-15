import { localizedTextValidationSchema } from "../../shared/validations/localized-text.validation.js";
import { z } from "zod";

export const strengthSchema = z.object({
    name: localizedTextValidationSchema,
    slug: z
        .string()
        .trim()
        .min(1)
        .max(100)
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    isActive: z.boolean().default(true),
    order: z.number().int().min(0).default(0),
});
