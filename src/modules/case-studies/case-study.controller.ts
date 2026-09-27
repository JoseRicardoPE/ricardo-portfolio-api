import { RequestHandler } from 'express';
import { getCaseStudyByProjectSlug } from './case-study.service.js';
import { caseStudySlugSchema } from './case-study.validation.js';

export const getCaseStudyByProjectSlugController: RequestHandler = async (req, res, next) => {
    try {
        const { slug } = caseStudySlugSchema.parse(req.params);
        const caseStudy = await getCaseStudyByProjectSlug(slug);
        if (!caseStudy) {
            res.status(404).json({
                error: {
                    message: 'Case study not found',
                },
            });
            return;
        }
        res.status(200).json({
            data: caseStudy,
        });
    } catch (error) {
        next(error);
    }
};
