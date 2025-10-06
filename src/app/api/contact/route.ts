import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const userLimit = rateLimitStore.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (userLimit.count >= maxRequests) {
    return false;
  }

  userLimit.count++;
  return true;
}

function validateInput(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Name validation
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== "string" || !emailRegex.test(data.email)) {
    errors.push("Valid email address is required");
  }

  // Company validation
  if (!data.company || typeof data.company !== "string" || data.company.trim().length < 1) {
    errors.push("Company name is required");
  }

  // Phone validation
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  const cleanPhone = data.phone?.replace(/[\s\-\(\)]/g, "") || "";
  if (!data.phone || typeof data.phone !== "string" || !phoneRegex.test(cleanPhone)) {
    errors.push("Valid phone number is required");
  }

  // Message validation
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters");
  }

  // Check for potential XSS
  const suspiciousPatterns = /<script|javascript:|on\w+\s*=/i;
  const fields = [data.name, data.email, data.company, data.phone, data.message];
  if (fields.some(field => suspiciousPatterns.test(field))) {
    errors.push("Invalid characters detected");
  }

  return { isValid: errors.length === 0, errors };
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting (best-effort via headers)
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = (forwardedFor?.split(",")[0]?.trim()) || realIp || "unknown";
    
    // Check rate limit
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request data" },
        { status: 400 }
      );
    }

    // Sanitize input data
    const sanitizedData: ContactFormData = {
      name: sanitizeInput(body.name || ""),
      email: sanitizeInput(body.email || ""),
      company: sanitizeInput(body.company || ""),
      phone: sanitizeInput(body.phone || ""),
      message: sanitizeInput(body.message || ""),
    };

    // Validate input
    const validation = validateInput(sanitizedData);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    // Create transporter (using custom SMTP for Namecheap domain)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "mail.privateemail.com", // Namecheap's mail server
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your domain email (e.g., wahab@fnw-logistics.com)
        pass: process.env.SMTP_PASS, // Your email password
      },
      tls: {
        rejectUnauthorized: false // For some hosting providers
      }
    });

    // Email to company
    const companyEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${sanitizedData.name}</p>
          <p><strong>Email:</strong> ${sanitizedData.email}</p>
          <p><strong>Company:</strong> ${sanitizedData.company}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
        </div>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
        </div>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #0369a1;">
            <strong>Submission Time:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    // Confirmation email to user
    const userEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Thank You for Contacting FNW Logistics
        </h2>
        
        <p>Dear ${sanitizedData.name},</p>
        
        <p>Thank you for reaching out to FNW Logistics! We have received your message and will get back to you within 24 hours.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">Your Message Summary</h3>
          <p><strong>Company:</strong> ${sanitizedData.company}</p>
          <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px;">${sanitizedData.message}</p>
        </div>
        
        <p>In the meantime, feel free to explore our services or contact us directly if you have any urgent inquiries.</p>
        
        <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #0369a1;">
            <strong>Best regards,</strong><br>
            FNW Logistics Team<br>
            Email: customer.services@fnw-logistics.com
          </p>
        </div>
      </div>
    `;

    // Send emails
    const emailPromises = [];

    // Email to company
    emailPromises.push(
      transporter.sendMail({
        from: `Customer Service <${process.env.SMTP_USER}>`,
        to: "customer.services@fnw-logistics.com",
        replyTo: sanitizedData.email,
        subject: `New Contact Form Submission from ${sanitizedData.name} - ${sanitizedData.company}`,
        html: companyEmailHtml,
      })
    );

    // Confirmation email to user
    emailPromises.push(
      transporter.sendMail({
        from: `Customer Service <${process.env.SMTP_USER}>`,
        to: sanitizedData.email,
        subject: "Thank you for contacting FNW Logistics",
        html: userEmailHtml,
      })
    );

    await Promise.all(emailPromises);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
