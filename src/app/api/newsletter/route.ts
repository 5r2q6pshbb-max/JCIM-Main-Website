import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { welcomeEmailHtml } from "@/lib/email-templates/welcome";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export async function POST(request: Request) {
  try {
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
