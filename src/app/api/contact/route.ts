import nodemailer from 'nodemailer';
import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Create transporter using your email service
    // You'll need to add these environment variables in your Vercel project
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'mail.your-domain.com'
      port: Number.parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your email
        pass: process.env.SMTP_PASS, // your email password
      },
    });

    // Email content
    const emailContent = `
      New Contact Form Submission
      
      Full Name: ${formData.fullName}
      Company Name: ${formData.companyName || 'Not provided'}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Destination: ${formData.destination}
      Interested Commodity: ${formData.commodity}
      Other Specification: ${formData.otherSpecification || 'Not provided'}
      Preferred Grade Expectation: ${formData.gradeExpectation}
      Quantity Required (MT): ${formData.quantity}
      Delivery Timeline: ${formData.deliveryTimeline}
      Additional Notes: ${formData.additionalNotes || 'None'}
      
      Submitted at: ${new Date().toLocaleString()}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${formData.fullName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
