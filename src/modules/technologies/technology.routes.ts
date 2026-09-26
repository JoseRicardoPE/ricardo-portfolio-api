import { Router } from 'express';
import { getTechnologiesController } from './technology.controller.js';

export const technologyRouter = Router();

technologyRouter.get('/', getTechnologiesController);
