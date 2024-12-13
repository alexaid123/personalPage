'use server'

import nodemailer from 'nodemailer';

type SendEmailParams = {
  to: string;
  subject: string;
  message: string;
};

export async function sendEmail({ to, subject, message }: SendEmailParams): Promise<boolean> {
  console.log('env is', process.env.GOOGLE_MAIL_APP_PASSWORD);

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
    subject,
    html: message,
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
