// emailSender.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: Number(process.env.BREVO_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const info = await transporter.sendMail({
  from: `"MERN Authentication System" <xtragaming91@gmail.com>`, // ✅ your verified sender
  to,
  subject,
  html: htmlContent,
});



    console.log("✅ Email sent:", info);
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
  }
};
