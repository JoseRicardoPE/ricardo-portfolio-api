import Express from 'express';

import { errorHandler } from './middlewares/error-handler.middleware.js';
import { notFoundHandler } from './middlewares/not-found.middleware.js';
import { technologyRouter } from './modules/technologies/technology.routes.js';
import { projectRouter } from './modules/projects/project.routes.js';

export const app = Express();

app.use(Express.json());

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        service: 'ricardo-portfolio-api',
    });
});

app.use('/api/technologies', technologyRouter);
app.use('/api/projects', projectRouter);

app.use(notFoundHandler);
app.use(errorHandler);
