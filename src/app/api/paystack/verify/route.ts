import { NextResponse } from "next/server";
import { verifyTransaction } from "@/lib/paystack";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const reference = searchParams.get("reference");

  if (!reference) {
    return NextResponse.json(
      { error: "Reference required" },
      { status: 400 }
    );
  }

  try {
    const result = await verifyTransaction(reference);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Verification failed" },
      { status: 500 }
    );
  }
}
