import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().max(20).optional().or(z.literal("")),
  numberOfGuests: z.coerce.number().min(1).max(10),
  eventId: z.string().min(1).max(200),
  eventTitle: z.string().min(1).max(200),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`rsvp:${ip}`, { maxRequests: 10, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = rsvpSchema.parse(body);

    console.log("[RSVP Submission]", {
      name: data.name,
      email: data.email,
      phone: data.phone || "N/A",
      numberOfGuests: data.numberOfGuests,
      eventId: data.eventId,
      eventTitle: data.eventTitle,
      submittedAt: new Date().toISOString(),
    });

    // Non-blocking confirmation email (escape user data to prevent XSS)
    const safeName = escapeHtml(data.name);
    const safeTitle = escapeHtml(data.eventTitle);
    sendEmail({
      to: data.email,
      subject: `RSVP Confirmed — ${data.eventTitle}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #0F0F1A; color: #FAFAF8;">
          <h1 style="color: #C7A34F; font-size: 24px; margin-bottom: 16px;">RSVP Confirmed</h1>
          <p style="color: #E8D5B7; line-height: 1.6;">
            Dear ${safeName},<br><br>
            Thank you for your RSVP to <strong>${safeTitle}</strong>. We look forward to seeing you!
          </p>
          <div style="margin: 24px 0; padding: 16px; border: 1px solid rgba(199,163,79,0.2); background: #1A1A2E;">
            <p style="color: #C7A34F; font-size: 14px; margin: 0;">Guests: ${data.numberOfGuests}</p>
          </div>
          <p style="color: #E8D5B780; font-size: 12px; margin-top: 24px;">
            Jesus CITY International Ministries<br>
            Raising Tomorrow's Leaders Today
          </p>
        </div>
      `,
    }).catch((err) => {
      console.error("[RSVP Email Error]", err);
    });

    return NextResponse.json(
      { message: "RSVP submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    console.error("[RSVP API Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
