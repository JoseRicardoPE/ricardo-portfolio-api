import { Schema, model } from 'mongoose';
import { ICaseStudy } from './case-study.interface.js';
import { localizedTextSchema } from '../../shared/schemas/localized-text.schema.js';

const caseStudySchema = new Schema<ICaseStudy>(
    {
        project: {
            type: Schema.Types.ObjectId,
            ref: 'Project',
            required: true,
            unique: true,
        },
        context: {
            type: localizedTextSchema,
            required: true,
        },
        role: {
            type: localizedTextSchema,
            required: true,
        },
        goal: {
            type: localizedTextSchema,
            required: true,
        },
        architecture: {
            type: localizedTextSchema,
            required: true,
        },
        challenges: {
            type: localizedTextSchema,
            required: true,
        },
        solution: {
            type: localizedTextSchema,
            required: true,
        },
        results: {
            type: localizedTextSchema,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const CaseStudyModel = model<ICaseStudy>('CaseStudy', caseStudySchema);
