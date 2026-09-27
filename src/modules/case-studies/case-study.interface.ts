import type { Types } from 'mongoose';
import { LocalizedText } from '../../shared/types/localized-text.interface.js';

export interface ICaseStudy {
    project: Types.ObjectId;
    context: LocalizedText;
    role: LocalizedText;
    goal: LocalizedText;
    architecture: LocalizedText;
    challenges: LocalizedText;
    solution: LocalizedText;
    results: LocalizedText;
}
