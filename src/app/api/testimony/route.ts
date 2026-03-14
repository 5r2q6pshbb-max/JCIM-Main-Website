import { NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";

const testimonySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().max(20).optional().or(z.literal("")),
  category: z.enum([
    "salvation",
    "healing",
    "deliverance",
    "provision",
    "transformation",
    "family",
  ]),
  testimony: z.string().min(20, "Testimony must be at least 20 characters").max(5000),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const { success } = rateLimit(`testimony:${ip}`, { maxRequests: 3, windowMs: 60_000 });
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const data = testimonySchema.parse(body);

    // TODO: Persist to database
    console.log("[Testimony Submission]", {
      category: data.category,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Testimony submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    console.error("[Testimony API Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
