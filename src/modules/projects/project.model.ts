import { Schema, model } from 'mongoose';
import { ProjectCategory } from './project-category.enum.js';
import type { IProject } from './project.interface.js';

const projectSchema = new Schema<IProject>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxLength: 100,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        shortDescription: {
            type: String,
            required: true,
            trim: true,
            maxLength: 300,
        },
        category: {
            type: String,
            required: true,
            enum: ProjectCategory,
        },
        technologies: {
            type: [Schema.Types.ObjectId],
            ref: 'Technology',
            default: [],
        },
        thumbnail: {
            type: String,
            trim: true,
        },
        liveUrl: {
            type: String,
            trim: true,
        },
        repositoryUrl: {
            type: String,
            trim: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        order: {
            type: Number,
            default: 0,
            min: 0,
        },
    },
    {
        timestamps: true,
    },
);

export const ProjectModel = model<IProject>('Project', projectSchema);
