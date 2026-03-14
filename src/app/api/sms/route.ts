import { NextResponse } from "next/server";
import { z } from "zod";
import { sendSMS } from "@/lib/sms";
import { rateLimit } from "@/lib/rate-limit";

const smsSchema = z.object({
  to: z.string().min(10, "Phone number required").max(20),
  message: z.string().min(1, "Message required").max(160, "Message too long"),
});

export async function POST(request: Request) {
  try {
    // Protect against abuse: require a shared secret for internal use
    const authHeader = request.headers.get("x-api-secret");
    if (authHeader !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`sms:${ip}`, { maxRequests: 5, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = smsSchema.parse(body);
    const result = await sendSMS(data);
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Failed to send SMS" },
      { status: 500 }
    );
  }
}
