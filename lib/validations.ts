import { z } from "zod";

export const ticketSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  requirements: z.string().optional(),
  priority: z.enum(["Low", "Medium", "High", "Critical"]).default("Medium"),
  status: z
    .enum(["Backlog", "In Progress", "In Review", "Testing", "Shipped"])
    .default("Backlog"),
  technicalPlan: z.string().optional(),
  testPlan: z.string().optional(),
  deploymentChecklist: z.string().optional(),
  aiSummary: z.string().optional(),
  aiVerified: z.boolean().default(false),
});

export const ticketUpdateSchema = ticketSchema.partial();

export const bugSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  description: z.string().min(10, "Description must be at least 10 characters."),
  stepsToReproduce: z.string().min(10, "Please enter reproduction steps."),
  expectedBehavior: z.string().min(5, "Expected behavior is required."),
  actualBehavior: z.string().min(5, "Actual behavior is required."),
  severity: z.enum(["Low", "Medium", "High", "Critical"]).default("Medium"),
  rootCause: z.string().optional(),
  fixSummary: z.string().optional(),
  verificationSteps: z.string().optional(),
  status: z
    .enum(["Open", "Investigating", "Fixed", "Verified", "Closed"])
    .default("Open"),
  aiRootCause: z.string().optional(),
  aiVerified: z.boolean().default(false),
});

export const bugUpdateSchema = bugSchema.partial();

export const dailyUpdateSchema = z.object({
  whatIWorkedOn: z.string().min(10, "Please summarize your work."),
  blockers: z.string().optional(),
  nextSteps: z.string().min(5, "Next steps are required."),
  questionsForTeam: z.string().optional(),
});

export const aiSuggestionSchema = z.object({
  category: z.enum([
    "ticketSummary",
    "technicalPlan",
    "testCases",
    "bugRootCause",
  ]),
  context: z.string().min(10, "Provide some context for the AI suggestion."),
});
