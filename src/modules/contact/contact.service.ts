import { contactMessageModel } from './contact.model.js';
import type { CreateContactMessageInput } from './contact.types.js';

export async function createContactMessage(input: CreateContactMessageInput) {
    return contactMessageModel.create(input);
}
