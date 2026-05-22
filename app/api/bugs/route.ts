import { NextResponse } from "next/server";
import { bugSchema } from "@/lib/validations";
import { bugs } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(bugs);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const result = bugSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const bug = {
    id: crypto.randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  bugs.unshift(bug);
  return NextResponse.json(bug, { status: 201 });
}
