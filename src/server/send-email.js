'use server';

import React from 'react';
import { Resend } from 'resend';
import template from '@/emails/template';

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData) => {
    const senderEmail = formData.get('senderEmail')
    const senderPhone = formData.get('senderPhone');
    const senderName = formData.get('senderName');
    const message = formData.get('message')

    let data 
    try {
        data = await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: 'osdouadi@gmail.com',
          subject: 'Message from SortaDev',
          reply_to: senderEmail,
          react: React.createElement(template, {
            message: message,
            senderName: senderName,
            senderPhone: senderPhone,
            senderEmail: senderEmail,
          }),
        });
    } catch (error) {
        console.log(error)
    }
    return data

}
