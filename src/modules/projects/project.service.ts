import { ProjectModel } from './project.model.js';

export async function getProjects() {
    return ProjectModel.find({
        isActive: true,
    })
        .sort({
            order: 1,
            title: 1,
        })
        .populate({
            path: 'technologies',
            select: 'name slug category icon',
        })
        .lean();
}
export async function getProjectBySlug(slug: string) {
    return ProjectModel.findOne({
        slug,
        isActive: true,
    })
        .populate({
            path: 'technologies',
            select: 'name slug category icon',
        })
        .lean();
}
