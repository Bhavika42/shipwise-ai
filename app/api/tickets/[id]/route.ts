import { NextResponse } from "next/server";
import { ticketUpdateSchema } from "@/lib/validations";
import { tickets } from "@/lib/mock-data";

export async function GET(request: Request, context: { params: { id: string } | Promise<{ id: string }> }) {
  const params = await context.params;
  const ticket = tickets.find((item) => item.id === params.id);
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
  }
  return NextResponse.json(ticket);
}

export async function PATCH(request: Request, context: { params: { id: string } | Promise<{ id: string }> }) {
  const params = await context.params;
  const payload = await request.json();
  const result = ticketUpdateSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const ticket = tickets.find((item) => item.id === params.id);
  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
  }

  Object.assign(ticket, result.data, { updatedAt: new Date().toISOString() });
  return NextResponse.json(ticket);
}

export async function DELETE(request: Request, context: { params: { id: string } | Promise<{ id: string }> }) {
  const params = await context.params;
  const index = tickets.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Ticket not found." }, { status: 404 });
  }
  tickets.splice(index, 1);
  return NextResponse.json({ success: true });
}
