'use server'

import { sendEmail } from './sendEmail';  

export async function SendEmailPost(to: string, subject: string, message: string) {
  console.log("Here");
  const success = await sendEmail({ to, subject, message });
  return {success};
}