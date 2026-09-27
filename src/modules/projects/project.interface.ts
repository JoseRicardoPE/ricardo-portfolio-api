import type { Types } from 'mongoose';
import { ProjectCategory } from './project-category.enum.js';
import { LocalizedText } from '../../shared/types/localized-text.interface.js';

export interface IProject {
    title: string;
    slug: string;
    shortDescription: LocalizedText;
    category: ProjectCategory;
    technologies: Types.ObjectId[];
    thumbnail?: string;
    liveUrl?: string;
    repositoryUrl?: string;
    featured: boolean;
    isActive: boolean;
    order: number;
}
