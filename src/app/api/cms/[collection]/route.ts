import { NextRequest, NextResponse } from "next/server";
import { isCollection, readCollection, writeCollection } from "@/lib/cms";
import { sendInquiryEmails } from "@/lib/mail";
import type { Inquiry } from "@/lib/types";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ collection: string }> },
) {
  const { collection } = await params;
  if (!isCollection(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  }
  const data = await readCollection(collection);
  return NextResponse.json(data, {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ collection: string }> },
) {
  const { collection } = await params;
  if (!isCollection(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  }
  try {
    const body = await req.json();
    await writeCollection(collection, body);
    return NextResponse.json(body);
  } catch (error) {
    console.error(`PUT /api/cms/${collection} error:`, error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message, details: String(error) }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ collection: string }> },
) {
  const { collection } = await params;
  if (!isCollection(collection)) {
    return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  }
  const item = await req.json();
  const current = await readCollection(collection);
  if (!Array.isArray(current)) {
    return NextResponse.json({ error: "Cannot append to this collection" }, { status: 400 });
  }
  const next = [item, ...current];
  await writeCollection(collection, next);

  if (collection === "inquiries") {
    try {
      const inbox = await sendInquiryEmails(item as Inquiry);
      return NextResponse.json({ ...item, emailed: true, inbox }, { status: 201 });
    } catch (error) {
      console.error("Inquiry email failed:", error);
      const message = error instanceof Error ? error.message : "Email failed";
      return NextResponse.json({ ...item, emailed: false, emailError: message }, { status: 201 });
    }
  }

  return NextResponse.json(item, { status: 201 });
}
