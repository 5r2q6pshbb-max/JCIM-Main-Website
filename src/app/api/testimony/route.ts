import { NextResponse } from "next/server";
import { z } from "zod";

const testimonySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  category: z.enum([
    "salvation",
    "healing",
    "deliverance",
    "provision",
    "transformation",
    "family",
  ]),
  testimony: z.string().min(20, "Testimony must be at least 20 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = testimonySchema.parse(body);

    // Log to console (no DB)
    console.log("[Testimony Submission]", {
      name: data.name,
      email: data.email || "N/A",
      phone: data.phone || "N/A",
      category: data.category,
      testimony: data.testimony,
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
