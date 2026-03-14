import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { contactNotificationHtml } from "@/lib/email-templates/contact-notification";
import { rateLimit } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(20).optional(),
  ageGroup: z.string().max(50).optional(),
  howHeard: z.string().max(200).optional(),
  message: z.string().max(2000).optional(),
  type: z.enum(["visitor", "volunteer", "general"]).default("general"),
  ministryInterest: z.string().max(200).optional(),
  availability: z.string().max(200).optional(),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`contact:${ip}`, { maxRequests: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = contactSchema.parse(body);

    // TODO: Integrate with CRM / database
    console.log("[Contact Form Submission]", {
      type: data.type,
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
