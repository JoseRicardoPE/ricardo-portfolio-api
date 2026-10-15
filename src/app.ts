import Express from 'express';
import cors from 'cors';
import { errorHandler } from './middlewares/error-handler.middleware.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';
import { technologyRouter } from './modules/technologies/technology.routes.js';
import { projectRouter } from './modules/projects/project.routes.js';
import { caseStudyRouter } from './modules/case-studies/case-study.routes.js';
import { contactRouter } from './modules/contact/contact.routes.js';
import { strengthRouter } from './modules/strength/strength.routes.js';

export const app = Express();

app.use(
    cors({
        origin: 'http://localhost:4200',
    }),
);

app.use(Express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'ricardo-portfolio-api',
    });
});

app.use('/api/technologies', technologyRouter);
app.use('/api/projects', projectRouter);
app.use('/api/case-studies', caseStudyRouter);
app.use('/api/contact', contactRouter);
app.use('/api/strengths', strengthRouter);

app.use(notFoundHandler);
app.use(errorHandler);
