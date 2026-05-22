import { NextResponse } from "next/server";
import { dailyUpdateSchema } from "@/lib/validations";
import { dailyUpdates } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(dailyUpdates);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const result = dailyUpdateSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const update = {
    id: crypto.randomUUID(),
    ...result.data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  dailyUpdates.unshift(update);
  return NextResponse.json(update, { status: 201 });
}
