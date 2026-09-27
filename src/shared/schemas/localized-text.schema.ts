import { Schema } from 'mongoose';
import type { LocalizedText } from '../types/localized-text.interface.js';

export const localizedTextSchema = new Schema<LocalizedText>(
    {
        es: {
            type: String,
            required: true,
            trim: true,
        },
        en: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        _id: false,
    },
);
