import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { resendClient, sender } from "./resend.config.js";

export const sendVerificationEmail = async (email, verificationToken) =>{
    const recipient  = [email];

    try{
        const response = await resendClient.emails.send({
            from : sender, 
            to:recipient,
            subject:"Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationToken),
            category:"Email Verification"
        }) 
        console.log("Email sent successfully", response);

    }catch(error) {
        console.log(`Error sending verification email`,error)
        throw new Error(`Error sending verification email: ${error}`);
        
    }
}