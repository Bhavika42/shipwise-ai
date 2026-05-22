import { NextResponse } from "next/server";
import { bugUpdateSchema } from "@/lib/validations";
import { bugs } from "@/lib/mock-data";

export async function GET(request: Request, context: { params: { id: string } | Promise<{ id: string }> }) {
  const params = await context.params;
  const bug = bugs.find((item) => item.id === params.id);
  if (!bug) {
    return NextResponse.json({ error: "Bug not found." }, { status: 404 });
  }
  return NextResponse.json(bug);
}

export async function PATCH(request: Request, context: { params: { id: string } | Promise<{ id: string }> }) {
  const params = await context.params;
  const payload = await request.json();
  const result = bugUpdateSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const bug = bugs.find((item) => item.id === params.id);
  if (!bug) {
    return NextResponse.json({ error: "Bug not found." }, { status: 404 });
  }

  Object.assign(bug, result.data, { updatedAt: new Date().toISOString() });
  return NextResponse.json(bug);
}

export async function DELETE(request: Request, context: { params: { id: string } | Promise<{ id: string }> }) {
  const params = await context.params;
  const index = bugs.findIndex((item) => item.id === params.id);
  if (index === -1) {
    return NextResponse.json({ error: "Bug not found." }, { status: 404 });
  }
  bugs.splice(index, 1);
  return NextResponse.json({ success: true });
}
