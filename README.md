This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
## ShipWise AI

This repository contains ShipWise AI, a full-stack Next.js App Router project for managing feature tickets, bug triage, daily updates, AI-assisted suggestions, and reports.

### Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm run dev
```

4. Run tests:

```bash
npm run test
```

### Prisma

- Generate the Prisma client:

```bash
npx prisma generate
```

- Push the schema to a database:

```bash
npx prisma db push
```

### Features

- Landing page with premium dark SaaS UI
- Dashboard UI with ticket and bug analytics
- Feature ticket CRUD pages
- Bug triage workflow and detail views
- Daily updates module with status reporting
- AI assistant section with mock suggestions
- REST API routes under `app/api`
- Zod validation and React Hook Form integration
- Prisma schema scaffold for PostgreSQL
- Vitest validation tests
