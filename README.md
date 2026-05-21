# ShipWise AI

ShipWise AI is a full-stack engineering workflow platform built with Next.js, TypeScript, REST APIs, and PostgreSQL. It helps developers manage feature tickets, triage bugs, write daily async updates, generate AI-assisted summaries, and track shipped work from idea to production.

## Why I Built This

This project is designed to simulate a real startup engineering workflow where developers take ownership of features end-to-end: clarifying requirements, planning implementation, building frontend and backend functionality, testing, shipping, and monitoring.

The project is especially focused on:
- Feature ownership
- Bug triage and root-cause analysis
- Responsible use of AI suggestions
- Clear remote communication
- Full-stack product development

## Features

### Authentication
- User signup
- User login
- Protected dashboard routes

### Dashboard
- Total feature tickets
- Open bugs
- Shipped features
- Daily updates
- Activity logs
- Charts and analytics

### Feature Tickets
- Create, edit, delete, and view feature tickets
- Track ticket status from backlog to shipped
- Add technical plan, test plan, and deployment checklist
- Generate AI-assisted ticket summaries

### Bug Triage
- Add bug reports
- Track severity and status
- Add reproduction steps
- Add expected and actual behavior
- Document root cause and fix summary
- Add verification steps before closing bugs

### AI Assistant
- Generate ticket summaries
- Suggest technical plans
- Suggest test cases
- Suggest possible bug root causes
- Manual verification checkbox for AI outputs

### Daily Updates
- Write async work updates
- Add blockers
- Add next steps
- Add questions for the team

### Activity Logs
- Track important user actions
- Monitor created, updated, and shipped work

## Tech Stack

- Next.js App Router
- TypeScript
- React
- PostgreSQL
- Prisma
- NextAuth/Auth.js
- Zod
- React Hook Form
- Recharts
- CSS Modules / SCSS
- Vitest or Jest
- Docker optional

## Planned Pages

- Landing Page
- Login Page
- Signup Page
- Dashboard
- Feature Tickets
- Create Ticket
- Ticket Details
- Bug Triage
- Create Bug
- Bug Details
- AI Assistant
- Daily Updates
- Reports
- Settings

## API Routes

```txt
POST   /api/auth/register
GET    /api/tickets
POST   /api/tickets
GET    /api/tickets/:id
PATCH  /api/tickets/:id
DELETE /api/tickets/:id

GET    /api/bugs
POST   /api/bugs
GET    /api/bugs/:id
PATCH  /api/bugs/:id
DELETE /api/bugs/:id

GET    /api/daily-updates
POST   /api/daily-updates

POST   /api/ai/suggest

```
## Engineering Practices

- Git-based workflow
- Issue-based development
- Feature branches
- REST API validation
- Protected routes
- Error handling
- Loading states
- Empty states
- Manual testing
- Unit/API testing
- Technical decision documentation
- Technical Decisions

## Technical decisions will be documented in:

docs/technical-decisions.md

## Project Status
Currently in development.

## Author
@Bhavika42
