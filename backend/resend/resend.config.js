import { Resend } from 'resend';
import dotenv from "dotenv";
dotenv.config();

export const resendClient = new Resend(process.env.RESEND_API);

export const sender = 'MERN-Authentication-System <onboarding@resend.dev>';
