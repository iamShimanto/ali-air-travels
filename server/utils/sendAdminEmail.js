const nodemailer = require("nodemailer");
const sendAdminEmail = async (emailTo, subject, htmlContent) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const message = {
    from: `"Ali Air Travels" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: subject,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 40px auto; border-radius: 16px; overflow: hidden; box-shadow: 0 6px 32px rgba(0,0,0,0.13); background: #f8fafc;">
        <div style="background: linear-gradient(90deg, #0ea5e9, #6366f1); padding: 36px 0; text-align: center; color: #fff;">
          <img src="https://i.ibb.co/6bQ7QpK/second-logo.png" alt="Ali Air Travels" style="height: 60px; margin-bottom: 12px;" />
          <h1 style="margin: 0; font-size: 30px; letter-spacing: 1px;">Admin Notification</h1>
        </div>
        <div style="background: #fff; padding: 36px 32px 32px 32px;">
          ${htmlContent}
        </div>
        <div style="background: #f1f5f9; text-align: center; padding: 18px 0; font-size: 13px; color: #64748b;">
          <p style="margin: 0;">&copy; ${new Date().getFullYear()} Ali Air Travels. All rights reserved.</p>
          <p style="margin: 4px 0 0;">Support: ${process.env.EMAIL_USER}</p>
        </div>
      </div>
    `,
  };
  await transporter.sendMail(message);
};

module.exports = sendAdminEmail;
