import { NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/paystack";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-paystack-signature") || "";

    if (!verifyWebhookSignature(body, signature)) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(body);
    console.log("[Paystack Webhook]", event.event, event.data?.reference);

    if (event.event === "charge.success") {
      // TODO: Record transaction in database
      console.log("[Payment Success]", {
        reference: event.data.reference,
        amount: event.data.amount / 100,
        currency: event.data.currency,
        email: event.data.customer.email,
      });
    }

    return NextResponse.json({ received: true });
  } catch {
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
