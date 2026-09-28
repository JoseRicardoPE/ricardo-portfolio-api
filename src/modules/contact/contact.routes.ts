import { Router } from 'express';
import { createContactMessageController } from './contact.controller.js';
import { contactRateLimiter } from './contact-rate-limit.middleware.js';

export const contactRouter = Router();

contactRouter.post('/', contactRateLimiter, createContactMessageController);
