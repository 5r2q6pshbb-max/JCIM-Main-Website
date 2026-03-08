import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { contactNotificationHtml } from "@/lib/email-templates/contact-notification";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  ageGroup: z.string().optional(),
  howHeard: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(["visitor", "volunteer", "general"]).default("general"),
  ministryInterest: z.string().optional(),
  availability: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Integrate with CRM / database
    console.log("[Contact Form Submission]", {
      type: data.type,
      name: data.name,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // Send admin notification email (non-blocking)
    sendEmail({
      to: process.env.RESEND_FROM_EMAIL || "info@jesuscityint.org",
      subject: `New ${data.type} form: ${data.name}`,
      html: contactNotificationHtml(data),
    }).catch(console.error);

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
