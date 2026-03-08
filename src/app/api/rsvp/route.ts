import { NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

const rsvpSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  numberOfGuests: z.coerce.number().min(1).max(10),
  eventId: z.string().min(1),
  eventTitle: z.string().min(1),
});

export async function POST(request: Request) {
  try {
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

    // Non-blocking confirmation email
    sendEmail({
      to: data.email,
      subject: `RSVP Confirmed — ${data.eventTitle}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #0F0F1A; color: #FAFAF8;">
          <h1 style="color: #C7A34F; font-size: 24px; margin-bottom: 16px;">RSVP Confirmed</h1>
          <p style="color: #E8D5B7; line-height: 1.6;">
            Dear ${data.name},<br><br>
            Thank you for your RSVP to <strong>${data.eventTitle}</strong>. We look forward to seeing you!
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
