import { Resend } from 'resend';
import { business } from '@/lib/data/business';

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

interface QuoteData {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: 'residential' | 'commercial';
  message?: string;
}

export async function sendQuoteNotification(data: QuoteData) {
  const { name, email, phone, city, serviceType, message } = data;
  
  const serviceLabel = serviceType === 'residential' ? 'Residential' : 'Commercial';
  const resend = getResendClient();
  
  await resend.emails.send({
    from: 'EXT Lighting <noreply@extlighting.com>',
    to: [business.leadEmail],
    replyTo: email,
    subject: `New Quote Request: ${serviceLabel} - ${city}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>City:</strong> ${city}</p>
      <p><strong>Service Type:</strong> ${serviceLabel}</p>
      ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
      <hr />
      <p style="color: #666; font-size: 12px;">This lead was submitted via the EXT Lighting website.</p>
    `,
  });

  await resend.emails.send({
    from: 'EXT Lighting <noreply@extlighting.com>',
    to: [email],
    subject: 'We received your quote request - EXT Lighting',
    html: `
      <h2>Thank you for your interest, ${name}!</h2>
      <p>We've received your request for a ${serviceLabel.toLowerCase()} permanent lighting quote in ${city}.</p>
      <p>One of our lighting specialists will contact you within 24 hours to discuss your project.</p>
      <p>In the meantime, feel free to:</p>
      <ul>
        <li>Call us at <a href="tel:${business.phoneRaw}">${business.phone}</a></li>
        <li>Check out our <a href="https://extlighting.com/gallery">gallery</a> for inspiration</li>
        <li>Read our <a href="https://extlighting.com/faq">FAQ</a> for common questions</li>
      </ul>
      <p>We look forward to helping you transform your property!</p>
      <p>Best regards,<br />The EXT Lighting Team</p>
    `,
  });
}
