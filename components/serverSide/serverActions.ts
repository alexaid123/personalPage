'use server'

import { sendEmail } from './sendEmail';  

export async function SendEmailPost(to: string, name: string, message: string) {
  const success = await sendEmail({ to, name, message });
  return {success};
}