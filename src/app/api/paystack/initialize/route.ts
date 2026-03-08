import { NextResponse } from "next/server";
import { z } from "zod";
import { initializeTransaction } from "@/lib/paystack";

const schema = z.object({
  email: z.string().email(),
  amount: z.number().positive(),
  currency: z.enum(["GHS", "USD"]).default("GHS"),
  name: z.string().optional(),
});

export async function POST(request: Request) {
  try {
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
