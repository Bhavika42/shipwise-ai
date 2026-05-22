import { z } from "zod";
import { ticketSchema, bugSchema, dailyUpdateSchema } from "./validations";

export type Ticket = z.infer<typeof ticketSchema> & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type Bug = z.infer<typeof bugSchema> & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type DailyUpdate = z.infer<typeof dailyUpdateSchema> & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type ActivityLog = {
  id: string;
  entity: "ticket" | "bug" | "daily-update";
  entityId: string;
  action: string;
  message: string;
  createdAt: string;
};

export const tickets: Ticket[] = [
  {
    id: "ticket-001",
    title: "Improve onboarding experience for new engineers",
    description:
      "Create a developer-friendly onboarding plan that includes environment setup, architectural overview, and initial contribution guidelines.",
    requirements:
      "Document key repositories, testing workflow, deployment steps, and common debugging patterns.",
    priority: "High",
    status: "In Progress",
    technicalPlan:
      "Add a central onboarding guide in the workspace docs, include a CLI workflow for local dev, and link to the architecture map.",
    testPlan:
      "Validate onboarding steps with a hired intern cohort, ensure environment setup completes in under 30 minutes.",
    deploymentChecklist:
      "Verify docs coverage, update README links, and confirm environment variables are accurate.",
    aiSummary:
      "Drafted an onboarding guide to reduce ramp time and provide consistent engineering expectations.",
    aiVerified: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "ticket-002",
    title: "Build feature request review board",
    description:
      "Implement a lightweight review board for product requests with status tracking and owner assignment.",
    requirements:
      "Support backlog tagging, priority sorting, and stakeholder notes.",
    priority: "Medium",
    status: "Backlog",
    technicalPlan: "Use a tickets table with status and user references in the next release.",
    testPlan:
      "Confirm ticket creation, status transitions, and reviewer notifications function correctly.",
    deploymentChecklist: "Deploy behind feature flag and validate UI on desktop and mobile.",
    aiSummary: "Generated specifications for a ticket review board and priority workflow.",
    aiVerified: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9).toISOString(),
  },
  {
    id: "ticket-003",
    title: "Launch analytics dashboard for triage metrics",
    description:
      "Design and ship a dashboard that visualizes defect rates, time to triage, and shipped work across teams.",
    requirements:
      "Include charts for bug severity, status distribution, and weekly throughput.",
    priority: "Critical",
    status: "In Review",
    technicalPlan:
      "Integrate mock analytics endpoints and render interactive charts for stakeholders.",
    testPlan: "Verify chart filtering, accessibility labels, and performance on mobile.",
    deploymentChecklist: "Review data mapping, fix console warnings, and confirm chart legends.",
    aiSummary: "Summarized requirements and technical approach for a triage analytics dashboard.",
    aiVerified: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 15).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
];

export const bugs: Bug[] = [
  {
    id: "bug-001",
    title: "Incorrect status when tickets move to In Review",
    description:
      "Named tickets appear as Backlog even after reviewers approve the work.",
    stepsToReproduce:
      "1. Move a ticket to In Review\n2. Add reviewer approval\n3. Observe status label on dashboard.",
    expectedBehavior: "Ticket should show In Review status after approval.",
    actualBehavior: "Status remains Backlog in the triage feed.",
    severity: "High",
    rootCause:
      "Client state was not refreshed after approval events triggered the status update.",
    fixSummary:
      "Add a server response refresh and ensure the ticket status field is updated in the store.",
    verificationSteps: "Approve a ticket and confirm the banner updates to In Review.",
    status: "Investigating",
    aiRootCause:
      "The state reducer does not handle the approval event, leaving the ticket in the old status.",
    aiVerified: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
  },
  {
    id: "bug-002",
    title: "Daily updates modal scrolls unexpectedly",
    description:
      "The daily update form modal loses scroll position when rich text fields are touched.",
    stepsToReproduce:
      "1. Open daily update modal\n2. Scroll down\n3. Click inside blocker field\n4. Modal resets to top.",
    expectedBehavior: "Form modal should preserve scroll position while typing.",
    actualBehavior: "Modal snaps back to the top of the content area.",
    severity: "Medium",
    rootCause:
      "Focus management triggered a re-render and re-mounted the modal content tree.",
    fixSummary:
      "Refactor modal internals to preserve the scroll container and avoid re-mounts.",
    verificationSteps: "Open the modal and type in multiple fields, verifying scroll remains stable.",
    status: "Open",
    aiRootCause:
      "The modal component resets focus on every render and loses its internal scroll offset.",
    aiVerified: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
  },
];

export const dailyUpdates: DailyUpdate[] = [
  {
    id: "update-001",
    whatIWorkedOn:
      "Refined the ticket detail page layout, added timeline sections for technical plans, and improved mobile spacing.",
    blockers: "Waiting on API contract details for feature ownership metadata.",
    nextSteps:
      "Wire ticket detail actions to the backend route and begin the bug triage summary view.",
    questionsForTeam:
      "Should the AI assistant suggest root causes for bugs or only summarize existing findings?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
  },
  {
    id: "update-002",
    whatIWorkedOn:
      "Built onboarding content for ShipWise AI and prepared the first dashboard summary metrics.",
    blockers: "None at the moment. Waiting for design feedback on the reports charts.",
    nextSteps:
      "Finish bug triage module and connect new forms to API routes.",
    questionsForTeam: "Can we add a nightly summary email for shipped work in the future?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
];

export const activityLogs: ActivityLog[] = [
  {
    id: "activity-001",
    entity: "ticket",
    entityId: "ticket-001",
    action: "Updated",
    message: "Final review comments were added to the onboarding ticket.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: "activity-002",
    entity: "bug",
    entityId: "bug-001",
    action: "Investigating",
    message: "Confirmed the status refresh issue appears after approval flow changes.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    id: "activity-003",
    entity: "ticket",
    entityId: "ticket-003",
    action: "Shipped",
    message: "Analytics dashboard spec moved to final review.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
  },
];

export const ticketStatusChart = [
  { name: "Backlog", value: 8 },
  { name: "In Progress", value: 5 },
  { name: "In Review", value: 3 },
  { name: "Testing", value: 2 },
  { name: "Shipped", value: 7 },
];

export const bugSeverityChart = [
  { name: "Low", value: 4 },
  { name: "Medium", value: 5 },
  { name: "High", value: 3 },
  { name: "Critical", value: 1 },
];

export const weeklyActivityChart = [
  { name: "Mon", tickets: 3, bugs: 2, updates: 1 },
  { name: "Tue", tickets: 5, bugs: 1, updates: 2 },
  { name: "Wed", tickets: 4, bugs: 2, updates: 3 },
  { name: "Thu", tickets: 6, bugs: 1, updates: 2 },
  { name: "Fri", tickets: 2, bugs: 3, updates: 1 },
];

export function getTicketById(id: string) {
  return tickets.find((ticket) => ticket.id === id);
}

export function getBugById(id: string) {
  return bugs.find((bug) => bug.id === id);
}

export function getDailyUpdateById(id: string) {
  return dailyUpdates.find((update) => update.id === id);
}
