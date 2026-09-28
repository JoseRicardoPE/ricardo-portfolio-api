import { rateLimit } from 'express-rate-limit';

export const contactRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    handler: (_req, res) => {
        res.status(429).json({
            error: {
                message: 'Too many contact requests. Please try again later.',
            },
        });
    },
});
