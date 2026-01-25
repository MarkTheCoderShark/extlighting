import { NextResponse } from "next/server";
import { z } from "zod";
import { sendQuoteNotification } from "@/lib/resend";

const quoteRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  city: z.string().min(1),
  serviceType: z.enum(["residential", "commercial"]),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = quoteRequestSchema.parse(body);

    await sendQuoteNotification(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Failed to process quote request" },
      { status: 500 }
    );
  }
}
