import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { welcomeEmailHtml } from "@/lib/email-templates/welcome";
import { rateLimit } from "@/lib/rate-limit";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`newsletter:${ip}`, { maxRequests: 3, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = newsletterSchema.parse(body);

    // TODO: Integrate with email marketing service (Mailchimp, ConvertKit, etc.)
    console.log("[Newsletter Signup]", {
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // Send welcome email (non-blocking)
    sendEmail({
      to: data.email,
      subject: "Welcome to JCIM! \uD83D\uDE4F",
      html: welcomeEmailHtml(data.email),
    }).catch(console.error);

    return NextResponse.json(
      {
        success: true,
        message:
          "Welcome to the family! You'll receive our updates soon.",
      },
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
