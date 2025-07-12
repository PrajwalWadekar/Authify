import express from "express";
import { sendEmail } from "../brevo/brevo.config.js";
const router = express.Router();

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ success: false, message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  const htmlContent = `
    <h2>🔐 Your OTP Code</h2>
    <p>Use this OTP to verify your account:</p>
    <h1>${otp}</h1>
    <p>This OTP is valid for 5 minutes.</p>
  `;

  await sendEmail(email, "Your OTP Code", htmlContent);

  res.status(200).json({ success: true, message: "OTP sent to email", otp }); // Don't send `otp` in production
});

export default router;
