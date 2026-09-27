import { Router } from 'express';
import { getCaseStudyByProjectSlugController } from './case-study.controller.js';

export const caseStudyRouter = Router();

caseStudyRouter.get('/:slug', getCaseStudyByProjectSlugController);
