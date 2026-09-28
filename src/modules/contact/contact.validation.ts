import { z } from 'zod';

export const contactMessageSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    subject: z.string().trim().min(2).max(150),
    message: z.string().trim().min(10).max(2000),
});
