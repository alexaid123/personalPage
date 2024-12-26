'use server'

import nodemailer from 'nodemailer';

type SendEmailParams = {
  to: string;
  name: string;
  message: string;
};

export async function sendEmail({ to, name, message }: SendEmailParams): Promise<boolean> {

  const emailBody = `
  <html>
    <body>
      <p>Hi Alexandros,</p>
      <p>You have received a message from <strong>${name} (${to})</strong> from your personal website. Here is the message:</p>
      <blockquote style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
        ${message}
      </blockquote>
      <p>Best regards,</p>
      <p>Your Amazing Self</p>
    </body>
  </html>
`;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.GOOGLE_MAIL_APP_EMAIL,
      pass: process.env.GOOGLE_MAIL_APP_PASSWORD,
    },
    localAddress: '0.0.0.0',
  });

  const mailOptions = {
    from: process.env.GOOGLE_MAIL_APP_EMAIL,
    to: process.env.GOOGLE_MAIL_APP_EMAIL,
    subject: "New Message From Your Website",
    html: emailBody,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.error('Success sending email:');
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
