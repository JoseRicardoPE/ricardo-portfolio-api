import { Schema, model } from 'mongoose';
import { IContactMessage } from './contact.interface.js';
import { ContactMessageStatus } from './contact-message-status.enum.js';

const contactMessageSchema = new Schema<IContactMessage>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 254,
        },
        subject: {
            type: String,
            required: true,
            trim: true,
            maxlength: 150,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 2000,
        },
        status: {
            type: String,
            enum: ContactMessageStatus,
            default: ContactMessageStatus.NEW,
        },
    },
    {
        timestamps: true,
    },
);

export const contactMessageModel = model<IContactMessage>('Contact', contactMessageSchema);
