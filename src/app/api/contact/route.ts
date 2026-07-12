import { NextRequest, NextResponse } from 'next/server';

// [INSERT REAL EMAIL SERVICE]
// Replace this handler with your chosen email provider, e.g.:
// - Resend: https://resend.com
// - SendGrid: https://sendgrid.com
// - Nodemailer + SMTP
// See PLACEHOLDERS.md for full integration notes.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, vehicle, message } = body;

    // Basic server-side validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required.' },
        { status: 400 }
      );
    }

    // Sanitise inputs (strip HTML tags to prevent injection)
    const sanitise = (s: unknown) =>
      typeof s === 'string' ? s.replace(/<[^>]*>/g, '').substring(0, 2000) : '';

    const payload = {
      name: sanitise(name),
      phone: sanitise(phone),
      email: sanitise(email),
      service: sanitise(service),
      vehicle: sanitise(vehicle),
      message: sanitise(message),
    };

    // -------------------------------------------------
    // PLACEHOLDER: send the email
    // Example using Resend (install: npm i resend):
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'website@carlocksmithleicester.co.uk',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `New locksmith enquiry from ${payload.name}`,
    //   text: `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\nService: ${payload.service}\nVehicle: ${payload.vehicle}\n\n${payload.message}`,
    // });
    // -------------------------------------------------

    // Log to console in development; remove in production
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', payload);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
