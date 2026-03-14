import { NextResponse } from "next/server";
import { z } from "zod";
import { initializeTransaction } from "@/lib/paystack";
import { rateLimit } from "@/lib/rate-limit";

const schema = z.object({
  email: z.string().email(),
  amount: z.number().positive().max(1_000_000),
  currency: z.enum(["GHS", "USD"]).default("GHS"),
  name: z.string().max(100).optional(),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`paystack:${ip}`, { maxRequests: 10, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = schema.parse(body);
    const result = await initializeTransaction({
      email: data.email,
      amount: data.amount,
      currency: data.currency,
      metadata: { donor_name: data.name },
    });
    return NextResponse.json(result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Failed to initialize" },
      { status: 500 }
    );
  }
}
