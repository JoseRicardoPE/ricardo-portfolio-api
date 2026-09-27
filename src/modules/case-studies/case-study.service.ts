import { CaseStudyModel } from './case-study.model.js';
import { ProjectModel } from '../projects/project.model.js';

export async function getCaseStudyByProjectSlug(slug: string) {
    const project = await ProjectModel.findOne({
        slug,
        isActive: true,
    })
        .select('_id')
        .lean();
    if (!project) {
        return null;
    }
    return CaseStudyModel.findOne({
        project: project._id,
    })
        .populate({
            path: 'project',
            select: 'title slug shortDescription category technologies thumbnail liveUrl repositoryUrl',
            populate: {
                path: 'technologies',
                select: 'name slug category icon',
            },
        })
        .lean();
}
