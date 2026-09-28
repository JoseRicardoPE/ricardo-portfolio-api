import { ContactMessageStatus } from './contact-message-status.enum.js';

export interface IContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
    status: ContactMessageStatus;
}
