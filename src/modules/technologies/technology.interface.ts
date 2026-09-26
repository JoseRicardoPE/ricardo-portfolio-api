import { TechnologyCategory } from './technology-category.enum.js';

export interface Technology {
    name: string;
    slug: string;
    category: TechnologyCategory;
    icon?: string;
    order: number;
    isActive: boolean;
}
