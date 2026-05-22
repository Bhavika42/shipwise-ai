import { describe, expect, it } from "vitest";
import { ticketSchema, bugSchema, dailyUpdateSchema, aiSuggestionSchema } from "../lib/validations";

describe("Validation schemas", () => {
  it("validates a ticket payload", () => {
    const result = ticketSchema.safeParse({
      title: "Improve bug triage workflow",
      description: "Add root cause categories and AI guidance to the triage board.",
      priority: "High",
      status: "Backlog",
    });

    expect(result.success).toBe(true);
  });

  it("validates a bug payload", () => {
    const result = bugSchema.safeParse({
      title: "Missing status update",
      description: "A bug ticket does not update after review status changes.",
      stepsToReproduce: "Open ticket, mark review complete, see stale status",
      expectedBehavior: "Status reflects review state.",
      actualBehavior: "Status stays stale.",
      severity: "Medium",
      status: "Open",
    });

    expect(result.success).toBe(true);
  });

  it("validates a daily update payload", () => {
    const result = dailyUpdateSchema.safeParse({
      whatIWorkedOn: "Implemented the new dashboard layout and data visualizations.",
      nextSteps: "Wire API routes for tickets and bugs.",
    });

    expect(result.success).toBe(true);
  });

  it("validates an AI suggestion request", () => {
    const result = aiSuggestionSchema.safeParse({
      category: "technicalPlan",
      context: "Describe the new deployment verification flow.",
    });

    expect(result.success).toBe(true);
  });
});
