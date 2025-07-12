import { resend } from "../resend/resend.config.js";

export const sendOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: "Email and OTP are required" });
  }

  try {
    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [email],
      subject: 'Your OTP Code',
      html: `<p>Your OTP is <strong>${otp}</strong></p>`,
    });

    if (response.error) {
      return res.status(500).json({ success: false, message: response.error.message });
    }

    res.status(200).json({ success: true, message: "Email sent", data: response.data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
