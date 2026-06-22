import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contact } from "@/lib/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Default testing address provided by Resend
      to: contact.email, // honeybloombeauty9@gmail.com
      subject: `New Inquiry from ${name} - ${service}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService of Interest: ${service || "N/A"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
