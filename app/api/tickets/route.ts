import { NextResponse } from "next/server";
import { ticketSchema } from "@/lib/validations";
import { tickets } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const result = ticketSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const ticket = {
    id: crypto.randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tickets.unshift(ticket);
  return NextResponse.json(ticket, { status: 201 });
}
