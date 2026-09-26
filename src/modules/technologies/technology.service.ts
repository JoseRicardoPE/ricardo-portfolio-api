import { TechnologyModel } from './technology.model.js';
import type { TechnologyCategory } from './technology-category.enum.js';

interface GetTechnologiesQuery {
    category?: TechnologyCategory;
}

export async function getTechnologies(query: GetTechnologiesQuery = {}) {
    const filter = {
        isActive: true,
        ...(query.category && { category: query.category }),
    };
    return TechnologyModel.find(filter)
        .sort({
            order: 1,
            name: 1,
        })
        .lean();
}
