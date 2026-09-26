import type { RequestHandler } from 'express';
import { getTechnologies } from './technology.service.js';
import { technologyQuerySchema } from './technology.validation.js';

export const getTechnologiesController: RequestHandler = async (req, res, next) => {
    try {
        const query = technologyQuerySchema.parse(req.query);
        const technologies = await getTechnologies(query);
        res.status(200).json({
            data: technologies,
        });
    } catch (error) {
        next(error);
    }
};
