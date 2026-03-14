import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { prayerConfirmationHtml } from "@/lib/email-templates/prayer-confirmation";
import { rateLimit } from "@/lib/rate-limit";

const prayerRequestSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email().optional().or(z.literal("")),
  request: z
    .string()
    .min(10, "Please share more details about your prayer request")
    .max(5000),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`prayer:${ip}`, { maxRequests: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = prayerRequestSchema.parse(body);

    // TODO: Integrate with email service to notify prayer team
    console.log("[Prayer Request]", {
      name: data.name,
      hasEmail: !!data.email,
      requestLength: data.request.length,
      timestamp: new Date().toISOString(),
    });

    // Send prayer confirmation email (non-blocking)
    if (data.email) {
      sendEmail({
        to: data.email,
        subject: "Your Prayer Request \u2014 JCIM",
        html: prayerConfirmationHtml(data.name),
      }).catch(console.error);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your prayer request has been received. Our team is praying with you.",
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
