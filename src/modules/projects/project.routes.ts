import { Router } from 'express';
import { getProjectsController, getProjectBySlugController } from './project.controller.js';

export const projectRouter = Router();

projectRouter.get('/', getProjectsController);
projectRouter.get('/:slug', getProjectBySlugController);
