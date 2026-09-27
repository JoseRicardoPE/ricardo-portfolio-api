import { z } from 'zod';

export const localizedTextValidationSchema = z.object({
    es: z.string().min(1).trim(),
    en: z.string().min(1).trim(),
});
