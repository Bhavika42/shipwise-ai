import { NextResponse } from "next/server";
import { aiSuggestionSchema } from "@/lib/validations";

const suggestions = {
  ticketSummary: (context: string) =>
    `Summary: ${context.slice(0, 120)}... Use this summary to clarify goals, acceptance criteria, and expected outcomes.`,
  technicalPlan: (context: string) =>
    `Technical plan: Review the request, define architecture boundaries, split work into components, and validate with unit and integration tests.`,
  testCases: (context: string) =>
    `Suggested test cases: 1) Validate core user flow, 2) confirm edge case behavior, 3) check state transitions, and 4) verify error handling paths.`,
  bugRootCause: (context: string) =>
    `Likely root cause: ${context.slice(0, 120)}... Investigate state management, API contract mismatches, and missing error handling in the affected flow.`,
};

export async function POST(request: Request) {
  const payload = await request.json();
  const result = aiSuggestionSchema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json({ error: result.error.flatten() }, { status: 400 });
  }

  const suggestion = suggestions[result.data.category](result.data.context);
  return NextResponse.json({ suggestion });
}
