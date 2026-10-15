import { LocalizedText } from "../../shared/types/localized-text.interface.js";

export interface Strength {
    name: LocalizedText;
    slug: string;
    order: number;
    isActive: boolean;
}