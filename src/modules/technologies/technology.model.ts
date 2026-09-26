import { Schema, model } from 'mongoose';
import { TechnologyCategory } from './technology-category.enum.js';
import type { Technology } from './technology.interface.js';

const technologySchema = new Schema<Technology>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        category: {
            type: String,
            required: true,
            enum: TechnologyCategory,
        },
        icon: {
            type: String,
            trim: true,
        },
        order: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true,
        },
    },
    {
        timestamps: true,
    },
);

export const TechnologyModel = model<Technology>('Technology', technologySchema);
