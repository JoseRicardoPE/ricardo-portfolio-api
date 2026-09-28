import { contactMessageSchema } from './contact.validation.js';
import { createContactMessage } from './contact.service.js';
import { RequestHandler } from 'express';

export const createContactMessageController: RequestHandler = async (req, res, next) => {
    try {
        const input = contactMessageSchema.parse(req.body);
        await createContactMessage(input);
        res.status(201).json({
            data: {
                message: 'Contact message sent successfully',
            },
        });
    } catch (error) {
        next(error);
    }
};
