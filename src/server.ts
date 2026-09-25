import { app } from './app.js';
import { env } from './config/env.js';
import { connectDatabase } from './config/database.js';

async function startServer(): Promise<void> {
    try {
        await connectDatabase();
        app.listen(env.port, () => {
            console.log(`API running on http://localhost:${env.port} [${env.nodeEnv}]`);
        });
    } catch (error) {
        console.error('Failed to start API:', error);
        process.exit(1);
    }
}

void startServer();
