import { NextResponse } from "next/server";
import { z } from "zod";
import { sendSMS } from "@/lib/sms";

const smsSchema = z.object({
  to: z.string().min(10, "Phone number required"),
  message: z.string().min(1, "Message required").max(160, "Message too long"),
});

export async function POST(request: Request) {
  try {
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
