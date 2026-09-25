import mongoose from 'mongoose';

import { env } from './env.js';

export async function connectDatabase(): Promise<void> {
    try {
        if (!env.mongodbUri) {
            throw new Error('MONGODB_URI environment variable is not defined');
        }
        await mongoose.connect(env.mongodbUri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
