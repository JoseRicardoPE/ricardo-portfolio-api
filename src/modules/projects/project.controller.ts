import type { RequestHandler } from 'express';
import { getProjects, getProjectBySlug } from './project.service.js';
import { projectSlugSchema } from './project.validation.js';

export const getProjectsController: RequestHandler = async (_req, res, next) => {
    try {
        const projects = await getProjects();
        res.status(200).json({
            data: projects,
        });
    } catch (error) {
        next(error);
    }
};

export const getProjectBySlugController: RequestHandler = async (req, res, next) => {
    try {
        const { slug } = projectSlugSchema.parse(req.params);
        const project = await getProjectBySlug(slug);
        if (!project) {
            res.status(404).json({
                error: {
                    message: 'Project not found',
                },
            });
            return;
        }
        res.status(200).json({
            data: project,
        });
    } catch (error) {
        next(error);
    }
};
