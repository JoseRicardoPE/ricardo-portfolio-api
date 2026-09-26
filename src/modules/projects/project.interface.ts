import type { Types } from 'mongoose';
import { ProjectCategory } from './project-category.enum.js';

export interface IProject {
    title: string;
    slug: string;
    shortDescription: string;
    category: ProjectCategory;
    technologies: Types.ObjectId[];
    thumbnail?: string;
    liveUrl?: string;
    repositoryUrl?: string;
    featured: boolean;
    isActive: boolean;
    order: number;
}
